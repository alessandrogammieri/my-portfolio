import Link from "next/link";
import { social } from "@/data/social";
import Button from "../ui/Button";
import { HiCalendarDays } from "react-icons/hi2";
import WorkExperience from "./WorkExperience";

export default function ProfileDescription() {
  return (
    <div className="max-w-[40rem] w-full flex flex-col self-center md:self-auto flex-9 relative">
      <div
        id="introduction"
        className="min-h-[10rem] min-w-0 w-full flex flex-col justify-center items-center md:items-start relative mb-8"
      >
        <div className="mb-6 flex gap-3 flex-wrap justify-center md:justify-start">
          <Button
            href="https://calendly.com/"
            icon={HiCalendarDays}
            chevron
            external={true}
          >
            Fissiamo una call
          </Button>
        </div>
        <h1 className="text-3xl md:text-5xl lg:text-6xl text-center md:text-left font-bold text-balance">
          Alessandro Gammieri
        </h1>
        <span className="text-xl md:text-2xl lg:text-3xl font-light text-gray-600 dark:text-gray-400">
          Full Stack Developer
        </span>
        <div className="w-fit flex flex-wrap gap-2 justify-center relative pt-6 pb-2">
          {social.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className="min-h-8 min-w-8 md:min-w-0 h-8 w-8 md:w-fit flex justify-center items-center gap-2 bg-transparent hover:bg-gray-400/10 focus:bg-gray-400/10 border border-gray-400/10 rounded-3xl md:px-3 md:py-0.5 transition-all duration-200"
              >
                <span className="h-fit w-fit inline-flex relative">
                  <Icon className="w-4 h-4" />
                </span>
                <div className="hidden md:flex relative text-xs">
                  {item.label}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <div className="min-w-0 w-full flex relative flex-col mb-20">
        Selene is a Jakarta-based design engineer with a passion for
        transforming complex challenges into simple, elegant design solutions.
        Her work spans digital interfaces, interactive experiences, and the
        convergence of design and technology.
      </div>
      <WorkExperience />
    </div>
  );
}
