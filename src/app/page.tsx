import Link from "next/link";
import Image from "next/image";
import Button from "@/components/ui/Button";
import ProjectShowcase from "@/components/sections/ProjectShowcase";
import ContactForm from "@/components/sections/ContactForm";
import { projectShowcaseSections } from "@/data/projects";
import { HiArrowRight } from "react-icons/hi2";

export default function Home() {
  return (
    <div className="min-w-0 w-full flex justify-center relative p-3 md:p-6 lg:p-10">
      <main className="min-w-0 w-full flex justify-center relative">
        <div className="max-w-5xl w-full flex flex-col relative py-3">
          <div className="min-w-0 w-full flex flex-col items-center gap-10 md:gap-16 lg:gap-20 relative">
            <div className="max-w-3xl w-full flex flex-col items-center relative text-center">
              <div className="min-w-0 w-full flex justify-center relative pt-4 pb-8">
                <Button href="/progetti" variant="default">
                  <span>Sviluppo</span>
                  <span className="text-gray-600 dark:text-gray-400 mx-2">
                    |
                  </span>
                  <span className="text-cyan-600 dark:text-cyan-500">
                    Progetti in evidenza
                  </span>
                </Button>
              </div>
              <div className="min-w-0 w-full flex justify-center relative pb-4">
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-balance">
                  Unisco design, tecnologia e soluzioni reali
                </h1>
              </div>
              <div className="min-w-0 w-full flex justify-center relative pb-8">
                <p className="text-xl md:text-2xl lg:text-3xl font-light text-gray-600 dark:text-gray-400 text-balance">
                  Creo soluzioni digitali performanti, curate nei dettagli e
                  progettate per crescere con il tuo progetto.
                </p>
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
            <div className="min-w-0 w-full flex relative">
              <div className="min-w-0 w-full flex flex-col relative px-4 md:px-6 lg:px-10 mb-10">
                <ProjectShowcase section={projectShowcaseSections[0]} />
              </div>
            </div>
            <div className="min-w-0 w-full flex flex-col relative mb-4 md:mb-6 lg:mb-10">
              <div className="min-w-0 w-full flex relative pr-16">
                <div className="max-w-3xl w-full h-0.5 bg-gray-400 dark:bg-gray-600"></div>
              </div>
              <div className="min-w-0 w-full flex flex-col md:flex-row gap-6 relative mt-10">
                <div className="flex relative grow-1 pl-4 md:pl-6 lg:pl-10 pt-6">
                  <h2 className="text-2xl lg:text-3xl font-semibold">
                    Novità dal Blog
                  </h2>
                </div>
                <div className="flex grow-3 relative px-5">
                  <div className="w-full relative grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                    <Link
                      href="/blog"
                      title="Read case study"
                      className="min-w-0 w-full flex p-0 border-none outline-0 bg-none"
                    >
                      <div className="min-w-0 w-full flex flex-col relative p-1 border border-transparent rounded-3xl hover:bg-gray-500/15 focus-within:bg-gray-500/15 active:bg-gray-500/15 transition-colors duration-300">
                        <div className="min-w-0 w-full flex relative">
                          <div className="w-full flex flex-col justify-center gap-5 relative px-4 md:px-6 lg:px-10 py-6">
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
                      <div className="min-w-0 w-full flex flex-col relative p-1 border border-transparent rounded-3xl hover:bg-gray-500/15 focus-within:bg-gray-500/15 active:bg-gray-500/15 transition-colors duration-300">
                        <div className="min-w-0 w-full flex relative">
                          <div className="w-full flex flex-col justify-center gap-5 relative px-4 md:px-6 lg:px-10 py-6">
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
              <div className="min-w-0 w-full flex justify-end relative pl-16">
                <div className="max-w-3xl w-full h-0.5 bg-gray-400 dark:bg-gray-600"></div>
              </div>
            </div>
            <div className="min-w-0 w-full flex flex-col gap-10 md:gap-16 lg:gap-20 relative px-4 md:px-6 lg:px-10 mb-10">
              <ProjectShowcase section={projectShowcaseSections[1]} />
              <ProjectShowcase section={projectShowcaseSections[2]} />
            </div>
            <ContactForm
              title="Hai un progetto o una domanda?"
              description="Scrivimi e ti risponderò il prima possibile"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
