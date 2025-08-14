import { notFound } from "next/navigation";

export default async function Comment({
  params,
}: {
  params: Promise<{ slug: string; commentId: string }>;
}) {
  const { slug, commentId } = await params;

  if (parseInt(commentId) > 100) {
    notFound();
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-3xl font-bold">Comment Page {commentId} </h1>
        <p className="text-lg">
          This is the Comment page {commentId} of our application of Post {slug}
          .
        </p>
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
