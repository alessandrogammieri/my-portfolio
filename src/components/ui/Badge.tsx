export default function Badge({ children }: { children: string }) {
  return (
    <div className="flex items-center relative bg-background-light dark:bg-background-dark border border-foreground-light/20 dark:border-foreground-dark/40 rounded-3xl px-3 py-0.5">
      <div className="flex items-center relative text-sm">
        <span className="text-gray-600 dark:text-gray-400">{children}</span>
      </div>
    </div>
  );
}
