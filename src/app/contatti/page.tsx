import Button from "@/components/ui/Button";
import ContactForm from "@/components/sections/ContactForm";
import { HiCalendarDays } from "react-icons/hi2";
import Link from "next/link";
import { social } from "@/data/social";

export const metadata = {
  title: {
    default: "Contatti",
  },
  description:
    "Offro consulenza e sviluppo su misura per applicazioni web moderne. Prenota una call per discutere del tuo progetto e delle tecnologie più adatte.",
};

export default function Contact() {
  return (
    <div className="min-w-0 w-full flex justify-center relative p-3 md:p-6 lg:p-10">
      <main className="min-w-0 w-full flex justify-center relative">
        <div className="max-w-5xl w-full flex flex-col relative py-3">
          <div className="min-w-0 w-full flex flex-col items-center gap-10 md:gap-16 lg:gap-20 relative">
            <div className="max-w-3xl w-full flex flex-col items-center relative text-center">
              <div className="min-w-0 w-full flex justify-center relative pt-4 pb-8">
                <Button
                  href="https://calendly.com/"
                  icon={HiCalendarDays}
                  chevron
                  external={true}
                >
                  Fissiamo una call
                </Button>
              </div>
              <div className="min-w-0 w-full flex justify-center relative pb-4">
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-balance">
                  Manteniamo viva la conversazione
                </h1>
              </div>
              <div className="min-w-0 w-full flex justify-center relative pb-8">
                <p className="text-xl md:text-2xl lg:text-3xl font-light text-gray-600 dark:text-gray-400 text-balance">
                  Se hai un'idea, una proposta o una curiosità, manda pure un
                  messaggio.
                </p>
              </div>
              <div className="w-fit flex flex-wrap gap-2 justify-center relative py-3">
                {social.map((item) => {
                  const Icon = item.icon;

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noopener noreferrer" : undefined}
                      className="min-h-8 min-w-8 md:min-w-0 h-8 w-8 md:w-fit flex justify-center items-center gap-2 bg-transparent hover:bg-gray-400/10 focus:bg-gray-400/10 border border-gray-400/10 rounded-3xl md:px-3 md:py-0.5 transition-all duration-200"
                    >
                      <span className="h-fit w-fit inline-flex relative">
                        <Icon className="w-4 h-4" />
                      </span>
                      <div className="hidden md:flex relative text-xs">
                        {item.label}
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
            <ContactForm
              title="Restiamo in contatto"
              description="Hai un'idea o un progetto? Mandami un messaggio e ne parliamo"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
