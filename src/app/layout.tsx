import type { Metadata } from "next";
import { Prompt } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";

const prompt = Prompt({
  variable: "--font-prompt",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Alessandro Gammieri | Full Stack Developer & Web Architect",
  description:
    "Sviluppatore full stack specializzato in applicazioni web moderne e performanti. Creo soluzioni digitali su misura con tecnologie all'avanguardia come Node.js, Next.js e React.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body
        className={`${prompt.variable} antialiased relative bg-background text-foreground`}
        cz-shortcut-listen="true"
      >
        <div className="min-h-0 min-w-0 h-full w-full fixed overflow-hidden">
          <div
            style={{
              maskImage:
                "radial-gradient(100vh at 50% 0%, #000000 0, transparent 100%)",
            }}
            className="min-h-0 min-w-0 overflow-hidden h-full w-full absolute left-0 top-0"
          >
            <div
              style={{
                backgroundImage: "radial-gradient(#094074 1px, #000000 1px)",
                backgroundSize: "0.125rem 0.125rem",
              }}
              className="min-h-0 min-w-0 h-full w-full absolute left-0 top-0 opacity-40 pointer-events-none"
            ></div>
          </div>
        </div>
        <div className="min-h-5 min-w-0 w-full relative"></div>
        <div
          style={{
            backdropFilter: "blur(.5rem)",
            background:
              "linear-gradient(180deg, var(--color-background), transparent)",
            maskImage: "linear-gradient(180deg, #000000 20%, transparent 100%)",
            maskSize: "100% 100%",
          }}
          className="min-w-0 w-full h-20 fixed top-0 z-20"
        ></div>
        <Header />
        {children}
      </body>
    </html>
  );
}
