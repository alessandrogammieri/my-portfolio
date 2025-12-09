import Link from "next/link";
import { social } from "@/data/social";
import { WorkExperience, Education } from "@/lib/types";
import Button from "../ui/Button";
import { HiCalendarDays } from "react-icons/hi2";
import WorkExperiences from "./WorkExperience";
import Study from "./Study";
import TechnicalSkills from "./TechnicalSkills";
import axios from "axios";

export default async function ProfileDescription() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
  const { data: workExperiences } = await axios.get<WorkExperience[]>(
    `${baseUrl}/data/workExperience.json`
  );
  const { data: educationList } = await axios.get<Education[]>(
    `${baseUrl}/data/education.json`
  );

  return (
    <div className="max-w-[40rem] w-full flex flex-col self-center md:self-auto flex-9 relative">
      <div
        id="introduction"
        className="min-h-[10rem] min-w-0 w-full flex flex-col justify-center items-center md:items-start relative mb-8 md:scroll-mt-20"
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
      <div className="min-w-0 w-full flex relative flex-col mb-20 text-lg">
        Sono un Full Stack Developer con una solida esperienza nello sviluppo di
        soluzioni web complete, performanti e intuitive. Unisco competenze
        tecniche e attenzione al design per realizzare applicazioni affidabili e
        ben strutturate, mantenendo un approccio orientato al miglioramento
        continuo e all'evoluzione tecnologica.
      </div>
      <div id="work-experience" className="md:scroll-mt-20">
        <WorkExperiences experiences={workExperiences} />
      </div>
      <div id="study" className="md:scroll-mt-20">
        <Study educationList={educationList} />
      </div>
      <div id="technical-skills" className="md:scroll-mt-20">
        <TechnicalSkills />
      </div>
    </div>
  );
}
