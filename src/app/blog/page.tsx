import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: {
    default: "Blog",
  },
  description:
    "Nel mio blog condivido articoli e risorse sullo sviluppo web moderno. Condivido esperienze e soluzioni pratiche per chi lavora con tecnologie moderne come Node.js, Next.js e React.",
};

export default function Blog() {
  return (
    <div className="min-w-0 w-full flex justify-center relative p-3 md:p-6 lg:p-10">
      <main className="min-w-0 w-full flex justify-center relative">
        <div className="max-w-5xl w-full flex flex-col relative py-6">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-balance mb-3 md:mb-6 lg:mb-10 ml-6">
            Writing about design and tech...
          </h1>
          <div className="min-w-0 w-full flex flex-col gap-10 relative">
            <div className="w-full grid grid-cols-1 relative gap-4 mb-10">
              <Link
                href="/blog"
                title="Read case study"
                className="min-w-0 w-full flex p-0 border-none outline-0 bg-none"
              >
                <div className="min-w-0 w-full flex flex-col md:flex-row gap-6 relative p-1 border border-transparent rounded-2xl hover:bg-gray-500/15 focus-within:bg-gray-500/15 active:bg-gray-500/15 transition-colors duration-300">
                  <div className="min-w-0 w-full flex flex-col relative rounded-2xl overflow-hidden border border-foreground-light/20 dark:border-foreground-dark/20 bg-background/50 backdrop-blur-sm bg-black/30 transition-colors duration-300">
                    <Image
                      src="/images/projects/image.jpeg"
                      alt="Image"
                      width={960}
                      height={0}
                      className="w-full h-auto"
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                  <div className="min-w-0 w-full flex relative">
                    <div className="max-w-md w-full flex justify-center flex-col gap-5 relative py-6 px-3 md:px-6 lg:px-10">
                      <div className="flex items-center gap-6 relative">
                        <Image
                          src="/images/avatar.jpeg"
                          alt="Avatar 1"
                          width={28}
                          height={28}
                          className="rounded-full border border-foreground-light/60 dark:border-foreground-dark/60 backdrop-blur-lg bg-black/30 transition-colors duration-300 relative z-30"
                        />
                        <div className="flex items-center gap-4 relative">
                          <span className="text-xs">agDeveloper</span>
                        </div>
                        <span className="text-xs text-gray-600 dark:text-gray-400">
                          23 Aprile 2025
                        </span>
                      </div>
                      <span className="text-lg md:text-xl lg:text-2xl font-semibold">
                        Quick start with Magic Portfolio
                      </span>
                      <span className="text-xs md:text-sm font-light text-gray-600 dark:text-gray-400">
                        Magic Portfolio
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 relative gap-4 mb-10">
              <Link
                href="/blog"
                title="Read case study"
                className="min-w-0 w-full flex p-0 border-none outline-0 bg-none"
              >
                <div className="min-w-0 w-full flex flex-col gap-6 relative p-1 border border-transparent rounded-2xl hover:bg-gray-500/15 focus-within:bg-gray-500/15 active:bg-gray-500/15 transition-colors duration-300">
                  <div className="min-w-0 w-full flex flex-col relative rounded-2xl overflow-hidden border border-foreground-light/20 dark:border-foreground-dark/20 bg-background/50 backdrop-blur-sm bg-black/30 transition-colors duration-300">
                    <Image
                      src="/images/projects/image.jpeg"
                      alt="Image"
                      width={960}
                      height={0}
                      className="w-full h-auto"
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                  <div className="min-w-0 w-full flex relative">
                    <div className="max-w-md w-full flex justify-center flex-col gap-5 relative py-6 px-3 md:px-6 lg:px-10">
                      <div className="flex items-center gap-6 relative">
                        <Image
                          src="/images/avatar.jpeg"
                          alt="Avatar 1"
                          width={28}
                          height={28}
                          className="rounded-full border border-foreground-light/60 dark:border-foreground-dark/60 backdrop-blur-lg bg-black/30 transition-colors duration-300 relative z-30"
                        />
                        <div className="flex items-center gap-4 relative">
                          <span className="text-xs">agDeveloper</span>
                        </div>
                        <span className="text-xs text-gray-600 dark:text-gray-400">
                          23 Aprile 2025
                        </span>
                      </div>
                      <span className="text-lg md:text-xl lg:text-2xl font-semibold">
                        Quick start with Magic Portfolio
                      </span>
                      <span className="text-xs md:text-sm font-light text-gray-600 dark:text-gray-400">
                        Magic Portfolio
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
              <Link
                href="/blog"
                title="Read case study"
                className="min-w-0 w-full flex p-0 border-none outline-0 bg-none"
              >
                <div className="min-w-0 w-full flex flex-col gap-6 relative p-1 border border-transparent rounded-2xl hover:bg-gray-500/15 focus-within:bg-gray-500/15 active:bg-gray-500/15 transition-colors duration-300">
                  <div className="min-w-0 w-full flex flex-col relative rounded-2xl overflow-hidden border border-foreground-light/20 dark:border-foreground-dark/20 bg-background/50 backdrop-blur-sm bg-black/30 transition-colors duration-300">
                    <Image
                      src="/images/projects/image.jpeg"
                      alt="Image"
                      width={960}
                      height={0}
                      className="w-full h-auto"
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                  <div className="min-w-0 w-full flex relative">
                    <div className="max-w-md w-full flex justify-center flex-col gap-5 relative py-6 px-3 md:px-6 lg:px-10">
                      <div className="flex items-center gap-6 relative">
                        <Image
                          src="/images/avatar.jpeg"
                          alt="Avatar 1"
                          width={28}
                          height={28}
                          className="rounded-full border border-foreground-light/60 dark:border-foreground-dark/60 backdrop-blur-lg bg-black/30 transition-colors duration-300 relative z-30"
                        />
                        <div className="flex items-center gap-4 relative">
                          <span className="text-xs">agDeveloper</span>
                        </div>
                        <span className="text-xs text-gray-600 dark:text-gray-400">
                          23 Aprile 2025
                        </span>
                      </div>
                      <span className="text-lg md:text-xl lg:text-2xl font-semibold">
                        Quick start with Magic Portfolio
                      </span>
                      <span className="text-xs md:text-sm font-light text-gray-600 dark:text-gray-400">
                        Magic Portfolio
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-balance ml-6">
              Earlier posts
            </h2>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 relative gap-4 mb-10">
              <Link
                href="/blog"
                title="Read case study"
                className="min-w-0 w-full flex p-0 border-none outline-0 bg-none"
              >
                <div className="min-w-0 w-full flex flex-col md:flex-row gap-6 relative p-1 border border-transparent rounded-2xl hover:bg-gray-500/15 focus-within:bg-gray-500/15 active:bg-gray-500/15 transition-colors duration-300">
                  <div className="min-w-0 w-full flex relative">
                    <div className="max-w-md w-full flex justify-center flex-col gap-5 relative py-6 px-3 md:px-6 lg:px-10">
                      <div className="flex items-center gap-6 relative">
                        <Image
                          src="/images/avatar.jpeg"
                          alt="Avatar 1"
                          width={28}
                          height={28}
                          className="rounded-full border border-foreground-light/60 dark:border-foreground-dark/60 backdrop-blur-lg bg-black/30 transition-colors duration-300 relative z-30"
                        />
                        <div className="flex items-center gap-4 relative">
                          <span className="text-xs">agDeveloper</span>
                        </div>
                        <span className="text-xs text-gray-600 dark:text-gray-400">
                          23 Aprile 2025
                        </span>
                      </div>
                      <span className="text-lg md:text-xl lg:text-2xl font-semibold">
                        Quick start with Magic Portfolio
                      </span>
                      <span className="text-xs md:text-sm font-light text-gray-600 dark:text-gray-400">
                        Magic Portfolio
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
              <Link
                href="/blog"
                title="Read case study"
                className="min-w-0 w-full flex p-0 border-none outline-0 bg-none"
              >
                <div className="min-w-0 w-full flex flex-col md:flex-row gap-6 relative p-1 border border-transparent rounded-2xl hover:bg-gray-500/15 focus-within:bg-gray-500/15 active:bg-gray-500/15 transition-colors duration-300">
                  <div className="min-w-0 w-full flex relative">
                    <div className="max-w-md w-full flex justify-center flex-col gap-5 relative py-6 px-3 md:px-6 lg:px-10">
                      <div className="flex items-center gap-6 relative">
                        <Image
                          src="/images/avatar.jpeg"
                          alt="Avatar 1"
                          width={28}
                          height={28}
                          className="rounded-full border border-foreground-light/60 dark:border-foreground-dark/60 backdrop-blur-lg bg-black/30 transition-colors duration-300 relative z-30"
                        />
                        <div className="flex items-center gap-4 relative">
                          <span className="text-xs">agDeveloper</span>
                        </div>
                        <span className="text-xs text-gray-600 dark:text-gray-400">
                          23 Aprile 2025
                        </span>
                      </div>
                      <span className="text-lg md:text-xl lg:text-2xl font-semibold">
                        Quick start
                      </span>
                      <span className="text-xs md:text-sm font-light text-gray-600 dark:text-gray-400">
                        Magic Portfolio
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
              <Link
                href="/blog"
                title="Read case study"
                className="min-w-0 w-full flex p-0 border-none outline-0 bg-none"
              >
                <div className="min-w-0 w-full flex flex-col md:flex-row gap-6 relative p-1 border border-transparent rounded-2xl hover:bg-gray-500/15 focus-within:bg-gray-500/15 active:bg-gray-500/15 transition-colors duration-300">
                  <div className="min-w-0 w-full flex relative">
                    <div className="max-w-md w-full flex justify-center flex-col gap-5 relative py-6 px-3 md:px-6 lg:px-10">
                      <div className="flex items-center gap-6 relative">
                        <Image
                          src="/images/avatar.jpeg"
                          alt="Avatar 1"
                          width={28}
                          height={28}
                          className="rounded-full border border-foreground-light/60 dark:border-foreground-dark/60 backdrop-blur-lg bg-black/30 transition-colors duration-300 relative z-30"
                        />
                        <div className="flex items-center gap-4 relative">
                          <span className="text-xs">agDeveloper</span>
                        </div>
                        <span className="text-xs text-gray-600 dark:text-gray-400">
                          23 Aprile 2025
                        </span>
                      </div>
                      <span className="text-lg md:text-xl lg:text-2xl font-semibold">
                        Quick start with Magic Portfolio
                      </span>
                      <span className="text-xs md:text-sm font-light text-gray-600 dark:text-gray-400">
                        Magic Portfolio
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
              <Link
                href="/blog"
                title="Read case study"
                className="min-w-0 w-full flex p-0 border-none outline-0 bg-none"
              >
                <div className="min-w-0 w-full flex flex-col md:flex-row gap-6 relative p-1 border border-transparent rounded-2xl hover:bg-gray-500/15 focus-within:bg-gray-500/15 active:bg-gray-500/15 transition-colors duration-300">
                  <div className="min-w-0 w-full flex relative">
                    <div className="max-w-md w-full flex justify-center flex-col gap-5 relative py-6 px-3 md:px-6 lg:px-10">
                      <div className="flex items-center gap-6 relative">
                        <Image
                          src="/images/avatar.jpeg"
                          alt="Avatar 1"
                          width={28}
                          height={28}
                          className="rounded-full border border-foreground-light/60 dark:border-foreground-dark/60 backdrop-blur-lg bg-black/30 transition-colors duration-300 relative z-30"
                        />
                        <div className="flex items-center gap-4 relative">
                          <span className="text-xs">agDeveloper</span>
                        </div>
                        <span className="text-xs text-gray-600 dark:text-gray-400">
                          23 Aprile 2025
                        </span>
                      </div>
                      <span className="text-lg md:text-xl lg:text-2xl font-semibold">
                        Quick start with Magic Portfolio
                      </span>
                      <span className="text-xs md:text-sm font-light text-gray-600 dark:text-gray-400">
                        Magic Portfolio
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
              <Link
                href="/blog"
                title="Read case study"
                className="min-w-0 w-full flex p-0 border-none outline-0 bg-none"
              >
                <div className="min-w-0 w-full flex flex-col md:flex-row gap-6 relative p-1 border border-transparent rounded-2xl hover:bg-gray-500/15 focus-within:bg-gray-500/15 active:bg-gray-500/15 transition-colors duration-300">
                  <div className="min-w-0 w-full flex relative">
                    <div className="max-w-md w-full flex justify-center flex-col gap-5 relative py-6 px-3 md:px-6 lg:px-10">
                      <div className="flex items-center gap-6 relative">
                        <Image
                          src="/images/avatar.jpeg"
                          alt="Avatar 1"
                          width={28}
                          height={28}
                          className="rounded-full border border-foreground-light/60 dark:border-foreground-dark/60 backdrop-blur-lg bg-black/30 transition-colors duration-300 relative z-30"
                        />
                        <div className="flex items-center gap-4 relative">
                          <span className="text-xs">agDeveloper</span>
                        </div>
                        <span className="text-xs text-gray-600 dark:text-gray-400">
                          23 Aprile 2025
                        </span>
                      </div>
                      <span className="text-lg md:text-xl lg:text-2xl font-semibold">
                        Quick start with Magic Portfolio
                      </span>
                      <span className="text-xs md:text-sm font-light text-gray-600 dark:text-gray-400">
                        Magic Portfolio
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
              <Link
                href="/blog"
                title="Read case study"
                className="min-w-0 w-full flex p-0 border-none outline-0 bg-none"
              >
                <div className="min-w-0 w-full flex flex-col md:flex-row gap-6 relative p-1 border border-transparent rounded-2xl hover:bg-gray-500/15 focus-within:bg-gray-500/15 active:bg-gray-500/15 transition-colors duration-300">
                  <div className="min-w-0 w-full flex relative">
                    <div className="max-w-md w-full flex justify-center flex-col gap-5 relative py-6 px-3 md:px-6 lg:px-10">
                      <div className="flex items-center gap-6 relative">
                        <Image
                          src="/images/avatar.jpeg"
                          alt="Avatar 1"
                          width={28}
                          height={28}
                          className="rounded-full border border-foreground-light/60 dark:border-foreground-dark/60 backdrop-blur-lg bg-black/30 transition-colors duration-300 relative z-30"
                        />
                        <div className="flex items-center gap-4 relative">
                          <span className="text-xs">agDeveloper</span>
                        </div>
                        <span className="text-xs text-gray-600 dark:text-gray-400">
                          23 Aprile 2025
                        </span>
                      </div>
                      <span className="text-lg md:text-xl lg:text-2xl font-semibold">
                        Quick start with Magic Portfolio
                      </span>
                      <span className="text-xs md:text-sm font-light text-gray-600 dark:text-gray-400">
                        Magic Portfolio
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
