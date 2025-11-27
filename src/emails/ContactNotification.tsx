import {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Section,
  Heading,
  Text,
  Hr,
} from "@react-email/components";
import { ContactNotificationProps } from "@/lib/types";

export default function ContactNotification({
  firstName,
  lastName,
  email,
  subject,
  message,
}: ContactNotificationProps) {
  const subjectLabels: Record<string, string> = {
    collaboration: "Collaborazione",
    job: "Opportunità di lavoro",
    info: "Richiesta informazioni",
    project: "Progetto",
    blog: "Blog",
  };

  return (
    <Html>
      <Head />
      <Preview>
        Nuovo messaggio da {firstName} {lastName} -{" "}
        {subjectLabels[subject] || subject}
      </Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>Nuovo Messaggio dal Portfolio</Heading>

          <Text style={text}>
            Hai ricevuto un nuovo messaggio di contatto dal tuo portfolio:
          </Text>

          <Section style={infoSection}>
            <Text style={label}>Da:</Text>
            <Text style={value}>
              {firstName} {lastName}
            </Text>

            <Text style={label}>Email:</Text>
            <Text style={value}>
              <a href={`mailto:${email}`} style={link}>
                {email}
              </a>
            </Text>

            <Text style={label}>Oggetto:</Text>
            <Text style={value}>{subjectLabels[subject] || subject}</Text>
          </Section>

          <Hr style={hr} />

          <Section style={messageSection}>
            <Text style={label}>Messaggio:</Text>
            <Text style={messageText}>{message}</Text>
          </Section>

          <Hr style={hr} />

          <Text style={footer}>
            Ricevuto il{" "}
            {new Date().toLocaleDateString("it-IT", {
              day: "numeric",
              month: "long",
              year: "numeric",
              hour: "2-digit",
              minute: "2-digit",
            })}
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

// Styles
const main = {
  backgroundColor: "#f6f9fc",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "20px 0 48px",
  marginBottom: "64px",
  maxWidth: "600px",
};

const h1 = {
  color: "#0891b2",
  fontSize: "28px",
  fontWeight: "700",
  margin: "40px 0 20px",
  padding: "0 40px",
};

const text = {
  color: "#4b5563",
  fontSize: "16px",
  lineHeight: "26px",
  padding: "0 40px",
  margin: "16px 0",
};

const infoSection = {
  padding: "0 40px",
  margin: "24px 0",
};

const label = {
  color: "#6b7280",
  fontSize: "13px",
  fontWeight: "600",
  textTransform: "uppercase" as const,
  letterSpacing: "0.5px",
  margin: "16px 0 4px",
};

const value = {
  color: "#111827",
  fontSize: "16px",
  lineHeight: "24px",
  margin: "0 0 16px",
};

const link = {
  color: "#0891b2",
  textDecoration: "none",
};

const hr = {
  borderColor: "#e5e7eb",
  margin: "32px 40px",
};

const messageSection = {
  padding: "0 40px",
  margin: "24px 0",
};

const messageText = {
  color: "#111827",
  fontSize: "16px",
  lineHeight: "26px",
  backgroundColor: "#f9fafb",
  padding: "20px",
  borderRadius: "8px",
  border: "1px solid #e5e7eb",
  margin: "8px 0",
  whiteSpace: "pre-wrap" as const,
};

const footer = {
  color: "#9ca3af",
  fontSize: "13px",
  textAlign: "center" as const,
  padding: "0 40px",
  margin: "32px 0 0",
};
