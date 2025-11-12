"use client";

import { useState, useRef, useEffect } from "react";
import Form from "next/form";
import { HiChevronDown } from "react-icons/hi2";

interface ContactFormProps {
  title?: string;
  description?: string;
  actionUrl?: string;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export default function ContactForm({
  title = "Get in Touch",
  description = "Send me a message and I'll get back to you as soon as possible",
  actionUrl = "/api/contact",
}: ContactFormProps) {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const blobRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!cardRef.current || !blobRef.current) return;

      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      blobRef.current.animate(
        {
          left: `${x}px`,
          top: `${y}px`,
        },
        { duration: 3000, fill: "forwards" }
      );
    };

    const card = cardRef.current;
    if (card) {
      card.addEventListener("pointermove", handleMouseMove);
    }

    return () => {
      if (card) {
        card.removeEventListener("pointermove", handleMouseMove);
      }
    };
  }, []);

  // Validazione input
  const validateForm = (formData: FormData): FormErrors => {
    const errors: FormErrors = {};

    const firstName = (formData.get("firstName") as string)?.trim();
    const lastName = (formData.get("lastName") as string)?.trim();
    const email = (formData.get("email") as string)?.trim();
    const subject = formData.get("subject") as string;
    const message = (formData.get("message") as string)?.trim();

    // Validazione Nome
    if (!firstName || firstName.length < 2) {
      errors.firstName = "Il nome deve contenere almeno 2 caratteri";
    } else if (firstName.length > 50) {
      errors.firstName = "Il nome non può superare 50 caratteri";
    } else if (!/^[a-zA-ZÀ-ÿ\s'-]+$/.test(firstName)) {
      errors.firstName = "Il nome contiene caratteri non validi";
    }

    // Validazione Cognome
    if (!lastName || lastName.length < 2) {
      errors.lastName = "Il cognome deve contenere almeno 2 caratteri";
    } else if (lastName.length > 50) {
      errors.lastName = "Il cognome non può superare 50 caratteri";
    } else if (!/^[a-zA-ZÀ-ÿ\s'-]+$/.test(lastName)) {
      errors.lastName = "Il cognome contiene caratteri non validi";
    }

    // Validazione Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      errors.email = "L'email è obbligatoria";
    } else if (!emailRegex.test(email)) {
      errors.email = "Inserisci un'email valida";
    } else if (email.length > 100) {
      errors.email = "L'email non può superare 100 caratteri";
    }

    // Validazione Oggetto
    if (!subject || subject === "") {
      errors.subject = "Seleziona un oggetto";
    }

    // Validazione Messaggio
    if (!message || message.length < 10) {
      errors.message = "Il messaggio deve contenere almeno 10 caratteri";
    } else if (message.length > 1000) {
      errors.message = "Il messaggio non può superare 1000 caratteri";
    }

    return errors;
  };

  // Sanitizzazione input
  const sanitizeInput = (input: string): string => {
    return input
      .replace(/[<>]/g, "") // Rimuove < e >
      .trim();
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Previeni submit multipli
    if (isSubmitting) return;

    setIsSubmitting(true);
    setErrors({});
    setStatus("loading");

    const formData = new FormData(e.currentTarget);

    // Validazione
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setStatus("error");
      setMessage("Correggi gli errori nel modulo");
      setIsSubmitting(false);
      return;
    }

    // Sanitizzazione dati
    const data = {
      firstName: sanitizeInput(formData.get("firstName") as string),
      lastName: sanitizeInput(formData.get("lastName") as string),
      email: sanitizeInput(formData.get("email") as string),
      subject: formData.get("subject") as string,
      message: sanitizeInput(formData.get("message") as string),
      // Honeypot per bot
      honeypot: formData.get("website") as string,
    };

    // Se honeypot è compilato, è un bot
    if (data.honeypot) {
      setStatus("success");
      setMessage("Messaggio inviato con successo!");
      formRef.current?.reset();
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch(actionUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus("success");
        setMessage("Messaggio inviato con successo!");
        formRef.current?.reset();
        setErrors({});
      } else {
        const errorData = await response.json().catch(() => ({}));
        setStatus("error");
        setMessage(errorData.message || "Qualcosa è andato storto. Riprova.");
      }
    } catch (error) {
      setStatus("error");
      setMessage("Errore di connessione. Riprova.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      ref={cardRef}
      className="min-w-0 w-full flex flex-col relative p-6 md:p-8 lg:p-10 mb-6 bg-background border border-foreground-light/10 dark:border-foreground-dark/10 rounded-3xl overflow-hidden items-center text-center"
    >
      {/* Background Gradient Effect */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden min-h-0 min-w-0 pointer-events-none">
        {/* Blob animato */}
        <div
          ref={blobRef}
          className="absolute pointer-events-none"
          style={{
            background:
              "linear-gradient(to right, rgb(75, 85, 99), rgb(253, 198, 189), rgb(107, 114, 128))",
            height: "300px",
            width: "300px",
            borderRadius: "50%",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            opacity: 0.7,
            filter: "blur(100px)",
          }}
        />
        {/* Blur overlay */}
        <div
          className="absolute top-0 left-0 w-full h-full pointer-events-none"
          style={{
            backdropFilter: "blur(150px)",
            WebkitBackdropFilter: "blur(150px)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative flex flex-col items-center w-full mb-10 z-10">
        <h2 className="text-2xl lg:text-3xl font-semibold mb-2">{title}</h2>
        <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 mb-6">
          {description}
        </p>
      </div>

      {/* Form */}
      <Form
        ref={formRef}
        action={actionUrl}
        onSubmit={handleSubmit}
        className="w-full flex justify-center relative z-10"
      >
        <div className="w-full max-w-2xl flex flex-col gap-4">
          {/* Nome e Cognome */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative flex flex-col gap-1">
              <div
                className={`relative flex items-stretch bg-gray-500/10 dark:bg-gray-500/10 border rounded-xl overflow-hidden transition-all duration-200 ${
                  errors.firstName
                    ? "border-red-500/50 dark:border-red-500/50"
                    : "border-gray-400/30 dark:border-gray-400/20 hover:border-gray-400/50 dark:hover:border-gray-400/30 focus-within:border-cyan-500/50 dark:focus-within:border-cyan-500/50"
                }`}
              >
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  required
                  minLength={2}
                  maxLength={50}
                  placeholder="Nome"
                  disabled={status === "loading"}
                  className="w-full px-4 py-3 bg-transparent text-sm md:text-base outline-none placeholder:text-gray-500 dark:placeholder:text-gray-500"
                  aria-invalid={errors.firstName ? "true" : "false"}
                  aria-describedby={
                    errors.firstName ? "firstName-error" : undefined
                  }
                />
              </div>
              {errors.firstName && (
                <span
                  id="firstName-error"
                  className="text-xs text-rose-400 px-1"
                >
                  {errors.firstName}
                </span>
              )}
            </div>
            <div className="relative flex flex-col gap-1">
              <div
                className={`relative flex items-stretch bg-gray-500/10 dark:bg-gray-500/10 border rounded-xl overflow-hidden transition-all duration-200 ${
                  errors.lastName
                    ? "border-red-500/50 dark:border-red-500/50"
                    : "border-gray-400/30 dark:border-gray-400/20 hover:border-gray-400/50 dark:hover:border-gray-400/30 focus-within:border-cyan-500/50 dark:focus-within:border-cyan-500/50"
                }`}
              >
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  required
                  minLength={2}
                  maxLength={50}
                  placeholder="Cognome"
                  disabled={status === "loading"}
                  className="w-full px-4 py-3 bg-transparent text-sm md:text-base outline-none placeholder:text-gray-500 dark:placeholder:text-gray-500"
                  aria-invalid={errors.lastName ? "true" : "false"}
                  aria-describedby={
                    errors.lastName ? "lastName-error" : undefined
                  }
                />
              </div>
              {errors.lastName && (
                <span
                  id="lastName-error"
                  className="text-xs text-rose-400 px-1"
                >
                  {errors.lastName}
                </span>
              )}
            </div>
          </div>

          {/* Email */}
          <div className="relative flex flex-col gap-1">
            <div
              className={`relative flex items-stretch bg-gray-500/10 dark:bg-gray-500/10 border rounded-xl overflow-hidden transition-all duration-200 ${
                errors.email
                  ? "border-red-500/50 dark:border-red-500/50"
                  : "border-gray-400/30 dark:border-gray-400/20 hover:border-gray-400/50 dark:hover:border-gray-400/30 focus-within:border-cyan-500/50 dark:focus-within:border-cyan-500/50"
              }`}
            >
              <input
                type="email"
                name="email"
                id="contact-email"
                required
                maxLength={100}
                placeholder="Email"
                disabled={status === "loading"}
                className="w-full px-4 py-3 bg-transparent text-sm md:text-base outline-none placeholder:text-gray-500 dark:placeholder:text-gray-500"
                aria-invalid={errors.email ? "true" : "false"}
                aria-describedby={errors.email ? "email-error" : undefined}
              />
            </div>
            {errors.email && (
              <span id="email-error" className="text-xs text-rose-400 px-1">
                {errors.email}
              </span>
            )}
          </div>

          {/* Honeypot field - nascosto per gli umani, visibile ai bot */}
          <input
            type="text"
            name="website"
            id="website"
            autoComplete="off"
            tabIndex={-1}
            className="absolute opacity-0 pointer-events-none"
            aria-hidden="true"
          />

          {/* Oggetto */}
          <div className="relative flex flex-col gap-1">
            <div
              className={`relative flex items-center bg-gray-500/10 dark:bg-gray-500/10 border rounded-xl overflow-hidden transition-all duration-200 ${
                errors.subject
                  ? "border-red-500/50 dark:border-red-500/50"
                  : "border-gray-400/30 dark:border-gray-400/20 hover:border-gray-400/50 dark:hover:border-gray-400/30 focus-within:border-cyan-500/50 dark:focus-within:border-cyan-500/50"
              }`}
            >
              <select
                name="subject"
                id="subject"
                required
                disabled={status === "loading"}
                className="w-full px-4 py-3 bg-transparent text-sm md:text-base cursor-pointer outline-none [&>option]:text-gray-900 [&>option]:dark:text-gray-600 appearance-none pr-10 invalid:text-gray-500 dark:invalid:text-gray-500"
                aria-invalid={errors.subject ? "true" : "false"}
                aria-describedby={errors.subject ? "subject-error" : undefined}
              >
                <option value="" disabled hidden>
                  Seleziona un oggetto
                </option>
                <option value="collaboration">Collaborazione</option>
                <option value="job">Opportunità di lavoro</option>
                <option value="info">Richiesta informazioni</option>
                <option value="project">Progetto</option>
                <option value="blog">Blog</option>
              </select>
              <HiChevronDown
                aria-hidden="true"
                className="absolute right-4 w-5 h-5 text-gray-500 dark:text-gray-400 pointer-events-none"
              />
            </div>
            {errors.subject && (
              <span id="subject-error" className="text-xs text-rose-400 px-1">
                {errors.subject}
              </span>
            )}
          </div>

          {/* Messaggio */}
          <div className="relative flex flex-col gap-1">
            <div
              className={`relative flex items-stretch bg-gray-500/10 dark:bg-gray-500/10 border rounded-xl overflow-hidden transition-all duration-200 ${
                errors.message
                  ? "border-red-500/50 dark:border-red-500/50"
                  : "border-gray-400/30 dark:border-gray-400/20 hover:border-gray-400/50 dark:hover:border-gray-400/30 focus-within:border-cyan-500/50 dark:focus-within:border-cyan-500/50"
              }`}
            >
              <textarea
                name="message"
                id="message"
                required
                minLength={10}
                maxLength={1000}
                rows={6}
                placeholder="Il tuo messaggio"
                disabled={status === "loading"}
                className="w-full px-4 py-3 bg-transparent text-sm md:text-base outline-none placeholder:text-gray-500 dark:placeholder:text-gray-500 resize-none"
                aria-invalid={errors.message ? "true" : "false"}
                aria-describedby={errors.message ? "message-error" : undefined}
              />
            </div>
            {errors.message && (
              <span id="message-error" className="text-xs text-rose-400 px-1">
                {errors.message}
              </span>
            )}
          </div>

          {/* Response Messages */}
          {status === "success" && (
            <div className="text-sm text-green-600 dark:text-green-500 text-center">
              {message}
            </div>
          )}
          {status === "error" && (
            <div className="text-sm text-rose-400 text-center">{message}</div>
          )}

          {/* Submit Button */}
          <div className="flex items-center h-12">
            <button
              type="submit"
              disabled={status === "loading" || isSubmitting}
              className="cursor-pointer group w-full h-full flex items-center justify-center gap-3 px-4 bg-gray-500/10 hover:bg-gray-400/15 active:bg-gray-400/15 dark:bg-cyan-500/10 dark:hover:bg-cyan-400/15 dark:active:bg-cyan-400/15 border border-cyan-600 dark:border-cyan-500 rounded-full transition-all duration-[400ms] ease-out relative hover:shadow-md active:shadow-md hover:shadow-gray-400/20 active:shadow-gray-400/20 dark:hover:shadow-cyan-500/20 dark:active:shadow-cyan-500/20 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
              aria-label="Invia messaggio"
            >
              {/* Shimmer effect */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-400/10 dark:via-white/10 to-transparent transition-all duration-[1.5s] ease-in-out opacity-0 group-hover:opacity-100 group-active:opacity-100 -translate-x-full group-hover:translate-x-full group-active:translate-x-full"></span>

              <span className="relative text-md transition-all duration-300 ease-out dark:group-hover:text-cyan-50 dark:group-active:text-cyan-50">
                {status === "loading" ? "Invio in corso..." : "Invia messaggio"}
              </span>
            </button>
          </div>
        </div>
      </Form>
    </div>
  );
}
