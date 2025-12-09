import Button from "@/components/ui/Button";
import ProjectShowcase from "@/components/sections/ProjectShowcase";
import { projectShowcaseSections } from "@/data/projects";

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
              <div className="min-w-0 w-full flex justify-center relative pt-3 pb-8">
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
              <ProjectShowcase section={projectShowcaseSections[0]} />
              <ProjectShowcase section={projectShowcaseSections[1]} />
              <ProjectShowcase section={projectShowcaseSections[2]} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
