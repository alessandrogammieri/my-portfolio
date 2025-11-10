import Button from "@/components/ui/Button";
import ProjectsSlider from "@/components/sections/ProjectsSlider";

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
                  Building bridges between design and code
                </h1>
              </div>
              <div className="min-w-0 w-full flex justify-center relative pb-8">
                <span className="text-xl md:text-2xl lg:text-3xl font-light text-gray-600 dark:text-gray-400">
                  I'm Selene, a design engineer at, where I craft intuitive user
                  experiences. After hours, I build my own projects.
                </span>
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
                <div className="min-w-0 w-full flex flex-col relative gap-6">
                  <div className="min-w-0 w-full flex flex-col relative">
                    <ProjectsSlider />
                  </div>
                  <div className="min-w-0 w-full flex flex-col md:flex-row gap-4 relative pt-3 pb-6 px-2">
                    <div className="flex grow-5 relative">
                      <h2 className="text-lg md:text-xl lg:text-2xl font-semibold">
                        Building Once UI, a Customizable Design System
                      </h2>
                    </div>
                    <div className="flex flex-col gap-4 grow-7 relative">
                      <div className="flex items-center relative"></div>
                      <span className="text-sm md:text-base font-light text-gray-600 dark:text-gray-400">
                        Development of a flexible and highly customizable design
                        system using Next.js for front-end and Figma for design
                        collaboration.
                      </span>
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
