import Link from "next/link";
import { Education } from "@/lib/types";

interface StudyProps {
  educationList: Education[];
}

export default function Study({ educationList }: StudyProps) {
  return (
    <div className="min-w-0 w-full relative">
      <h2 className="text-3xl md:text-4xl font-semibold text-balance mb-6">
        Formazione
      </h2>
      <div className="min-w-0 w-full flex flex-col gap-10 relative mb-10">
        {educationList.map((education) => (
          <div
            key={education.id}
            className="min-w-0 w-full flex flex-col relative gap-2"
          >
            {education.institutionUrl ? (
              <Link
                href={education.institutionUrl}
                target="_blank"
                rel="noopener noreferrer"
                title={education.institution}
                className="text-xl font-semibold"
              >
                {education.institution}
              </Link>
            ) : (
              <span className="text-xl font-semibold">
                {education.institution}
              </span>
            )}
            <span className="text-gray-600 dark:text-gray-400">
              {education.description}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
