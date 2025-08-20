export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-3xl font-bold">Home</h1>
        <p className="text-lg">
          This is the Home page of our application. We are dedicated to
          providing the best user experience.
        </p>
      </main>
    </div>
  );
}
