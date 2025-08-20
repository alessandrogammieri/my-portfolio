export const metadata = {
  title: {
    default: "Blog",
  },
  description:
    "Nel mio blog condivido articoli e risorse sullo sviluppo web moderno. Condivido esperienze e soluzioni pratiche per chi lavora con tecnologie moderne come Node.js, Next.js e React.",
};

export default function Blog() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-3xl font-bold">Blog Page</h1>
        <p className="text-lg">
          This is the Blog page of our application. Here you can find various
          tasks and projects.
        </p>
      </main>
    </div>
  );
}
