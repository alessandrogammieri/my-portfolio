import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ProjectsSlider from "@/components/sections/ProjectsSlider";
import { HiArrowRight } from "react-icons/hi2";

type Props = {
  params: Promise<{ slug: string }>;
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const slug = (await params).slug;
  return {
    title: {
      default: `Progetto: ${slug}`,
      template:
        "%s | Alessandro Gammieri - Full Stack Developer & Web Architect",
    },
    description: `Questa è la pagina del progetto ${slug}.`,
  };
};

export default async function Project({ params }: Props) {
  const slug = (await params).slug;

  return (
    <div className="min-w-0 w-full flex justify-center relative p-3 md:p-6 lg:p-10">
      <main className="min-w-0 w-full flex justify-center relative">
        <div className="max-w-5xl w-full flex flex-col items-center gap-4 md:gap-6 lg:gap-10 relative py-3">
          <div className="max-w-3xl w-full flex flex-col items-center gap-4 relative text-center">
            <Link
              href="/progetti"
              title="Explore case study"
              aria-label="Explore detailed case study"
              className="group flex items-center text-sm mt-3 text-cyan-600 dark:text-cyan-500 hover:text-[#0a0a0a] hover:dark:text-white transition-all duration-300"
            >
              <span className="font-semibold">Progetti</span>
            </Link>
            <span className="text-xs text-gray-600 dark:text-gray-400 mb-3">
              23 Aprile 2025
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance">
              Building Once UI, a Customizable Design System
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
                  <Image
                    src="/images/avatar.jpeg"
                    alt="Avatar 2"
                    width={28}
                    height={28}
                    className="rounded-full border border-foreground-light/60 dark:border-foreground-dark/60 backdrop-blur-lg bg-black/30 transition-colors duration-300 relative z-20"
                  />
                </div>
              </div>
              <span className="flex flex-col sm:flex-row items-start sm:items-center text-sm text-gray-600 dark:text-gray-400">
                <span className="mr-2">Alessandro Gammieri,</span>
                <Link
                  href="/progetti"
                  title="Explore case study"
                  aria-label="Explore detailed case study"
                  className="group flex items-center text-sm text-cyan-600 dark:text-cyan-500 hover:text-[#0a0a0a] hover:dark:text-white transition-all duration-300"
                >
                  <span>Alessandro Ferri</span>
                </Link>
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
                Next.js, focusing on accessibility and responsiveness.
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
            <p className="mt-2 mb-3 text-sm sm:text-base">
              Development of a flexible and highly customizable design system
              using Next.js for front-end and Figma for design collaboration.
            </p>
          </article>
          <div className="min-w-0 w-full flex flex-col items-center gap-10 relative mt-10">
            <div className="min-w-0 max-w-10 h-0.5 w-full flex relative bg-gray-400 dark:bg-gray-600"></div>
            <h2 className="font-bold text-xl md:text-2xl lg:text-3xl mb-6">
              Related projects
            </h2>
            <div className="min-w-0 w-full flex relative">
              <div className="min-w-0 w-full flex flex-col relative px-4 md:px-6 lg:px-10 mb-10">
                <div className="min-w-0 w-full flex flex-col relative gap-6">
                  <div className="min-w-0 w-full flex flex-col relative">
                    <ProjectsSlider startIndex={0} count={4} />
                  </div>
                  <div className="min-w-0 w-full flex flex-col md:flex-row gap-4 relative pt-3 pb-6 px-2">
                    <div className="flex grow-5 relative">
                      <h2 className="text-lg md:text-xl lg:text-2xl font-semibold">
                        Featured Project Showcase
                      </h2>
                    </div>
                    <div className="flex flex-col gap-4 grow-7 relative">
                      <div className="flex items-center relative">
                        <div className="flex items-center -space-x-2">
                          <Image
                            src="/images/avatar.jpeg"
                            alt="Avatar 1"
                            width={28}
                            height={28}
                            className="rounded-full border border-foreground-light/60 dark:border-foreground-dark/60 backdrop-blur-lg bg-black/30 transition-colors duration-300 relative z-30"
                          />
                          <Image
                            src="/images/avatar.jpeg"
                            alt="Avatar 2"
                            width={28}
                            height={28}
                            className="rounded-full border border-foreground-light/60 dark:border-foreground-dark/60 backdrop-blur-lg bg-black/30 transition-colors duration-300 relative z-20"
                          />
                        </div>
                      </div>
                      <span className="text-sm md:text-base font-light text-gray-600 dark:text-gray-400">
                        Development of a flexible and highly customizable design
                        system using Next.js for front-end and Figma for design
                        collaboration.
                      </span>
                      <div className="flex relative">
                        <Link
                          href="/progetti"
                          title="Read case study"
                          aria-label="Read detailed case study"
                          className="group flex items-center gap-2 text-sm text-cyan-600 dark:text-cyan-500 mb-6 hover:gap-3 active:gap-3 transition-all duration-300"
                        >
                          <span>Read case study</span>
                          <HiArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-active:translate-x-0.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
