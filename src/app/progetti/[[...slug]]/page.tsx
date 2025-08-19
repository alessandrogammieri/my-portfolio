export const metadata = {
  title: {
    default: "Progetti",
  },
  description:
    "In questa sezione condivido alcuni dei progetti a cui ho lavorato. Amo sviluppare applicazioni web su misura, combinando design intuitivo e tecnologie moderne come Node.js e React.",
};

export default async function Works({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        {slug?.length === 1 ? (
          <>
            <h1 className="text-3xl font-bold">Works Detail Page</h1>
            <p className="text-lg">
              This is the Works Detail page of our application. Here you can
              find more information about a specific work item.
            </p>
            <p className="text-sm text-gray-600">Category: {slug[0]}</p>
          </>
        ) : slug?.length === 2 ? (
          <>
            <h1 className="text-3xl font-bold">Works Detail Page</h1>
            <p className="text-lg">
              This is the Works Detail page of our application. Here you can
              find more information about a specific work item.
            </p>
            <p className="text-sm text-gray-600">
              Category: {slug[0]} | Project: {slug[1]}
            </p>
          </>
        ) : (
          <>
            <h1 className="text-3xl font-bold">Works Page</h1>
            <p className="text-lg">
              This is the Works page of our application. Here you can find
              various tasks and projects.
            </p>
          </>
        )}
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Next.js
        </a>
      </footer>
    </div>
  );
}
