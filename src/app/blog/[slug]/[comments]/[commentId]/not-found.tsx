"use client";

import { usePathname } from "next/navigation";

export default function NotFound() {
  const pathname = usePathname();
  const slug = pathname.split("/")[2];
  const commentId = pathname.split("/")[4];

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-3xl font-bold">Comment - Not Found</h1>
        <p className="text-lg">
          This page could not be found. Please check the URL or return to the
          home page.
        </p>
        <p className="text-sm text-gray-500">
          CommentId <span className="font-mono">{commentId}</span> not found for
          slug <span className="font-mono">{slug}</span>
        </p>
      </main>
    </div>
  );
}
