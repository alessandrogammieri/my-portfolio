import Link from "next/link";
import Image from "next/image";
import Button from "@/components/ui/Button";
import ProjectsSlider from "@/components/sections/ProjectsSlider";
import Video from "@/components/ui/Video";
import { HiArrowRight } from "react-icons/hi2";

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
    <div className="min-w-0 w-full flex justify-center relative p-3 md:p-6 lg:p-10">
      <main className="min-w-0 w-full flex justify-center relative">
        <div className="max-w-5xl w-full flex flex-col relative py-3">
          <div className="min-w-0 w-full flex flex-col items-center gap-10 md:gap-16 lg:gap-20 relative">
            <div className="max-w-3xl w-full flex flex-col items-center relative text-center">
              <div className="min-w-0 w-full flex justify-center relative pt-4 pb-8">
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-balance leading-none">
                  Progetti e Idee
                </h1>
              </div>
              <div className="min-w-0 w-full flex justify-center relative pt-3">
                <Button
                  href="/profilo"
                  avatar="/images/avatar.jpeg"
                  chevron
                  variant="transparent"
                >
                  Vai al Profilo
                </Button>
              </div>
            </div>
            <div className="min-w-0 w-full flex flex-col gap-10 md:gap-16 lg:gap-20 relative px-4 md:px-6 lg:px-10 mb-10">
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
                      </div>
                    </div>
                    <span className="text-sm md:text-base font-light text-gray-600 dark:text-gray-400">
                      Explore our recent collaborations with clients, featuring
                      custom solutions and innovative approaches to complex
                      challenges.
                    </span>
                    <div className="flex relative">
                      <Link
                        href="/progetti/featured-project-showcase"
                        title="Explore case study"
                        aria-label="Explore detailed case study"
                        className="group flex items-center gap-2 text-sm text-cyan-600 dark:text-cyan-500 mb-6 hover:gap-3 active:gap-3 transition-all duration-300"
                      >
                        <span>Explore case study</span>
                        <HiArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-active:translate-x-0.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="min-w-0 w-full flex flex-col relative gap-6">
                <div className="min-w-0 w-full flex flex-col relative">
                  <Video src="/videos/test.mp4" loop muted />
                </div>
                <div className="min-w-0 w-full flex flex-col md:flex-row gap-4 relative pt-3 pb-6 px-2">
                  <div className="flex grow-5 relative">
                    <h2 className="text-lg md:text-xl lg:text-2xl font-semibold">
                      Interactive Project Demo
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
                      </div>
                    </div>
                    <span className="text-sm md:text-base font-light text-gray-600 dark:text-gray-400">
                      Watch this interactive demo showcasing real-time features
                      and dynamic user interactions in our latest project.
                    </span>
                    <div className="flex relative">
                      <Link
                        href="/progetti"
                        title="View full project"
                        aria-label="View full project details"
                        className="group flex items-center gap-2 text-sm text-cyan-600 dark:text-cyan-500 mb-6 hover:gap-3 active:gap-3 transition-all duration-300"
                      >
                        <span>View full project</span>
                        <HiArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-active:translate-x-0.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="min-w-0 w-full flex flex-col relative gap-6">
                <div className="min-w-0 w-full flex flex-col relative">
                  <ProjectsSlider startIndex={2} count={2} />
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
                      </div>
                    </div>
                    <span className="text-sm md:text-base font-light text-gray-600 dark:text-gray-400">
                      Explore our recent collaborations with clients, featuring
                      custom solutions and innovative approaches to complex
                      challenges.
                    </span>
                    <div className="flex relative">
                      <Link
                        href="/progetti"
                        title="Explore case study"
                        aria-label="Explore detailed case study"
                        className="group flex items-center gap-2 text-sm text-cyan-600 dark:text-cyan-500 mb-6 hover:gap-3 active:gap-3 transition-all duration-300"
                      >
                        <span>Explore case study</span>
                        <HiArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-active:translate-x-0.5" />
                      </Link>
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
