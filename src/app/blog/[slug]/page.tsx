import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CodeBlock from "@/components/ui/CodeBlock";
import ShareButtons from "@/components/ui/ShareButtons";

type Props = {
  params: Promise<{ slug: string }>;
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const slug = (await params).slug;
  return {
    title: {
      default: `Post: ${slug}`,
      template:
        "%s | Alessandro Gammieri - Full Stack Developer & Web Architect",
    },
    description: `This is the post page for ${slug}.`,
  };
};

export default async function Post({ params }: Props) {
  const slug = (await params).slug;

  return (
    <div className="min-w-0 w-full flex justify-center relative p-3 md:p-6 lg:p-10">
      <main className="min-w-0 w-full flex justify-center relative">
        <div className="max-w-5xl w-full flex flex-col items-center gap-4 md:gap-6 lg:gap-10 relative py-3">
          <div className="max-w-3xl w-full flex flex-col items-center gap-4 relative text-center">
            <Link
              href="/blog"
              title="Explore case study"
              aria-label="Explore detailed case study"
              className="group flex items-center text-sm mt-3 text-cyan-600 dark:text-cyan-500 hover:text-[#0a0a0a] hover:dark:text-white transition-all duration-300"
            >
              <span className="font-semibold">Blog</span>
            </Link>
            <span className="text-xs text-gray-600 dark:text-gray-400 mb-3">
              23 Aprile 2025
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance">
              Quick start with Magic Portfolio
            </h1>
          </div>
          <div className="flex justify-center relative mb-8">
            <div className="flex justify-center items-center gap-4 relative">
              <div className="flex items-center relative">
                <div className="flex items-center -space-x-2">
                  <Image
                    src="/images/avatar.jpeg"
                    alt="Avatar 1"
                    width={28}
                    height={28}
                    className="rounded-full border border-foreground-light/60 dark:border-foreground-dark/60 backdrop-blur-lg bg-black/30 transition-colors duration-300 relative z-30"
                  />
                </div>
              </div>
              <span className="flex flex-col sm:flex-row items-start sm:items-center text-sm text-cyan-600 dark:text-cyan-500">
                Alessandro Gammieri
              </span>
            </div>
          </div>
          <div className="min-w-0 w-full flex flex-col relative m-0 rounded-2xl overflow-hidden border border-foreground-light/20 dark:border-foreground-dark/20 bg-background/50 backdrop-blur-sm">
            <Image
              src="/images/projects/image2.jpeg"
              alt="Progetto 2"
              width={960}
              height={0}
              className="w-full h-auto"
              style={{ objectFit: "contain" }}
            />
          </div>
          <article className="max-w-2xl w-full flex flex-col m-auto relative">
            <div className="flex items-center relative mt-6 mb-3 gap-2">
              <h2 className="font-bold text-lg sm:text-xl">Overview</h2>
            </div>
            <p className="mt-2 mb-3 text-sm sm:text-base">
              Development of a flexible and highly customizable design system
              using Next.js for front-end and Figma for design collaboration.
            </p>
            <div className="flex items-center relative mt-6 mb-3 gap-2">
              <h2 className="font-bold text-lg sm:text-xl">Key Features</h2>
            </div>
            <ul className="list-disc m-0 pl-6 pr-0 py-0">
              <li className="pl-2 pr-0 py-0 mt-1 mb-2 text-sm sm:text-base">
                <strong>Component Library</strong>: Built a set of modular,
                reusable UI components using React and styled-components in
                Next.js, focusing on accessibility and responsiveness.
              </li>
              <li className="pl-2 pr-0 py-0 mt-1 mb-2 text-sm sm:text-base">
                <strong>Component Library</strong>: Built a set of modular,
                reusable UI components using React and styled-components in
                Next.js, focusing on accessibility and{" "}
                <Link
                  href="/blog"
                  title="Explore case study"
                  aria-label="Explore detailed case study"
                  className="text-cyan-600 dark:text-cyan-500 hover:text-[#0a0a0a] hover:dark:text-white transition-all duration-300"
                >
                  Blog
                </Link>
                .
              </li>
              <li className="pl-2 pr-0 py-0 mt-1 mb-2 text-sm sm:text-base">
                <strong>Component Library</strong>: Built a set of modular,
                reusable UI components using React and styled-components in
                Next.js, focusing on accessibility and responsiveness.
              </li>
              <li className="pl-2 pr-0 py-0 mt-1 mb-2 text-sm sm:text-base">
                <strong>Component Library</strong>: Built a set of modular,
                reusable UI components using React and styled-components in
                Next.js, focusing on accessibility and responsiveness.
              </li>
            </ul>
            <div className="flex items-center relative mt-6 mb-3 gap-2">
              <h2 className="font-bold text-lg sm:text-xl">Overview</h2>
            </div>
            <p className="mt-2 mb-3 text-sm sm:text-base">
              Development of a flexible and highly customizable design system
              using Next.js for front-end and Figma for design collaboration.
            </p>
            <div className="flex items-center relative mt-6 mb-3 gap-2">
              <h2 className="font-bold text-lg sm:text-xl">Overview</h2>
            </div>
            <CodeBlock code="npm install" language="bash" />
            <p className="mt-2 mb-3 text-sm sm:text-base">
              Development of a flexible and highly customizable design system
              using Next.js for front-end and Figma for design collaboration.
            </p>
          </article>
          <div className="min-w-0 w-full flex flex-col sm:flex-row items-center justify-center gap-4 relative mt-8 mb-4">
            <span className="text-gray-600 dark:text-gray-400">
              Share this post:
            </span>
            <ShareButtons
              url="https://tuosito.com/blog/articolo"
              title="Titolo dell'articolo"
              description="Descrizione breve dell'articolo"
            />
          </div>
          <div className="min-w-0 w-full flex flex-col items-center gap-10 relative mt-10">
            <div className="min-w-0 max-w-10 h-0.5 w-full flex relative bg-gray-400 dark:bg-gray-600"></div>
            <h2 className="font-bold text-xl md:text-2xl lg:text-3xl mb-6">
              Recent posts
            </h2>
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
          </div>
        </div>
      </main>
    </div>
  );
}
