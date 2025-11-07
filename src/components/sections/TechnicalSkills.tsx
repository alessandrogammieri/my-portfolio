"use client";

import { technicalSkills } from "@/data/technicalSkills";

export default function TechnicalSkills() {
  return (
    <div className="min-w-0 w-full relative">
      <h2 className="text-3xl md:text-4xl font-semibold text-balance mb-6">
        Skills Tecniche
      </h2>
      <div className="min-w-0 w-full flex flex-col gap-6 relative mb-10">
        {technicalSkills.map((category) => (
          <div
            key={category.id}
            className="min-w-0 w-full flex flex-col relative"
          >
            <h3 className="text-lg font-semibold mb-3">{category.title}</h3>
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill) => {
                const Icon = skill.icon;

                return (
                  <div
                    key={skill.name}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg border border-foreground-light/30 dark:border-foreground-dark/30 bg-background/50 backdrop-blur-sm text-gray-600 dark:text-gray-400"
                  >
                    <Icon
                      className="text-base flex-shrink-0"
                      aria-hidden="true"
                    />
                    <span className="text-xs whitespace-nowrap select-none">
                      {skill.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
