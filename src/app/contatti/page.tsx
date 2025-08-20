export const metadata = {
  title: {
    default: "Contatti",
  },
  description:
    "Offro consulenza e sviluppo su misura per applicazioni web moderne. Prenota una call per discutere del tuo progetto e delle tecnologie più adatte.",
};

export default function Contact() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-3xl font-bold">Contact Page</h1>
        <p className="text-lg">
          This is the Contact page of our application. Here you can find various
          tasks and projects.
        </p>
      </main>
    </div>
  );
}
