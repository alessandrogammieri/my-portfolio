import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import ContactNotification from "@/emails/ContactNotification";

const resend = new Resend(process.env.RESEND_API_KEY);

// Rate limiting semplice in memoria (per ambiente di sviluppo)
// Per produzione, usa Upstash Redis o Vercel KV
const rateLimit = new Map<string, { count: number; resetTime: number }>();

const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 ora
const MAX_REQUESTS = 5; // Max 5 richieste per ora per IP

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = rateLimit.get(ip);

  if (!record || now > record.resetTime) {
    rateLimit.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return true;
  }

  if (record.count >= MAX_REQUESTS) {
    return false;
  }

  record.count++;
  return true;
}

// Validazione server-side (duplica quella client per sicurezza)
function validateContactData(data: any): {
  valid: boolean;
  errors: Record<string, string>;
} {
  const errors: Record<string, string> = {};

  // Validazione Nome
  if (!data.firstName || typeof data.firstName !== "string") {
    errors.firstName = "Nome richiesto";
  } else if (data.firstName.length < 2 || data.firstName.length > 50) {
    errors.firstName = "Nome deve essere tra 2 e 50 caratteri";
  } else if (!/^[a-zA-ZÀ-ÿ\s'-]+$/.test(data.firstName)) {
    errors.firstName = "Nome contiene caratteri non validi";
  }

  // Validazione Cognome
  if (!data.lastName || typeof data.lastName !== "string") {
    errors.lastName = "Cognome richiesto";
  } else if (data.lastName.length < 2 || data.lastName.length > 50) {
    errors.lastName = "Cognome deve essere tra 2 e 50 caratteri";
  } else if (!/^[a-zA-ZÀ-ÿ\s'-]+$/.test(data.lastName)) {
    errors.lastName = "Cognome contiene caratteri non validi";
  }

  // Validazione Email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email || typeof data.email !== "string") {
    errors.email = "Email richiesta";
  } else if (!emailRegex.test(data.email)) {
    errors.email = "Email non valida";
  } else if (data.email.length > 100) {
    errors.email = "Email troppo lunga";
  }

  // Validazione Subject
  const validSubjects = ["collaboration", "job", "info", "project", "blog"];
  if (!data.subject || !validSubjects.includes(data.subject)) {
    errors.subject = "Oggetto non valido";
  }

  // Validazione Messaggio
  if (!data.message || typeof data.message !== "string") {
    errors.message = "Messaggio richiesto";
  } else if (data.message.length < 10) {
    errors.message = "Messaggio troppo breve (min 10 caratteri)";
  } else if (data.message.length > 1000) {
    errors.message = "Messaggio troppo lungo (max 1000 caratteri)";
  }

  // Controllo spam keywords (opzionale ma consigliato)
  const spamKeywords = ["viagra", "casino", "lottery", "winner", "crypto", "bitcoin"];
  const messageText = data.message?.toLowerCase() || "";
  const hasSpam = spamKeywords.some((keyword) => messageText.includes(keyword));
  if (hasSpam) {
    errors.message = "Contenuto non consentito";
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}

export async function POST(request: NextRequest) {
  try {
    // 1. Ottieni IP per rate limiting
    const ip = request.headers.get("x-forwarded-for") || "unknown";

    // 2. Verifica rate limiting
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { message: "Troppi tentativi. Riprova più tardi." },
        { status: 429 }
      );
    }

    // 3. Parse body
    const body = await request.json();

    // 4. Verifica honeypot (campo nascosto per bot)
    if (body.honeypot) {
      // Bot detected, fai finta che sia andato tutto bene
      return NextResponse.json({ message: "Messaggio inviato con successo" });
    }

    // 5. Validazione server-side
    const { valid, errors } = validateContactData(body);
    if (!valid) {
      return NextResponse.json(
        { message: "Dati non validi", errors },
        { status: 400 }
      );
    }

    // 6. Sanitizzazione (rimuovi HTML/caratteri pericolosi)
    const sanitizedData = {
      firstName: body.firstName.trim().replace(/[<>]/g, ""),
      lastName: body.lastName.trim().replace(/[<>]/g, ""),
      email: body.email.trim().toLowerCase(),
      subject: body.subject,
      message: body.message.trim().replace(/[<>]/g, ""),
    };

    // 7. Verifica che RESEND_API_KEY sia configurata
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY non configurata");
      return NextResponse.json(
        { message: "Servizio email non configurato" },
        { status: 500 }
      );
    }

    // 8. Verifica che email destinatario sia configurata
    if (!process.env.CONTACT_EMAIL_TO) {
      console.error("CONTACT_EMAIL_TO non configurata");
      return NextResponse.json(
        { message: "Email destinatario non configurata" },
        { status: 500 }
      );
    }

    // 9. Invia email con Resend
    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev",
      to: process.env.CONTACT_EMAIL_TO,
      subject: `Nuovo contatto: ${sanitizedData.firstName} ${sanitizedData.lastName}`,
      replyTo: sanitizedData.email,
      react: ContactNotification({
        firstName: sanitizedData.firstName,
        lastName: sanitizedData.lastName,
        email: sanitizedData.email,
        subject: sanitizedData.subject,
        message: sanitizedData.message,
      }),
    });

    if (error) {
      console.error("Errore invio email:", error);
      return NextResponse.json(
        { message: "Errore nell'invio dell'email" },
        { status: 500 }
      );
    }

    console.log("Email inviata con successo:", data);

    // 10. Risposta successo
    return NextResponse.json({
      message: "Messaggio inviato con successo!",
      id: data?.id,
    });
  } catch (error) {
    console.error("Errore nel processing della richiesta:", error);
    return NextResponse.json(
      { message: "Errore interno del server" },
      { status: 500 }
    );
  }
}
