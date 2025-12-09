import Link from "next/link";
import Image from "next/image";
import ProjectsSlider from "./ProjectsSlider";
import Video from "@/components/ui/Video";
import { ProjectShowcaseSection } from "@/lib/types";
import { HiArrowRight } from "react-icons/hi2";

interface ProjectShowcaseProps {
  section: ProjectShowcaseSection;
}

export default function ProjectShowcase({ section }: ProjectShowcaseProps) {
  return (
    <div className="min-w-0 w-full flex flex-col relative gap-6">
      {/* Media Section */}
      <div className="min-w-0 w-full flex flex-col relative">
        {section.mediaType === "slider" && section.projects && (
          <ProjectsSlider projects={section.projects} />
        )}

        {section.mediaType === "video" && section.videoSrc && (
          <Video src={section.videoSrc} loop muted />
        )}

        {section.mediaType === "single-image" && section.imageSrc && (
          <Image
            src={section.imageSrc}
            alt={section.imageAlt || section.title}
            width={1200}
            height={600}
            className="w-full h-auto rounded-2xl"
          />
        )}
      </div>

      {/* Content Section */}
      <div className="min-w-0 w-full flex flex-col md:flex-row gap-4 relative pt-3 pb-6 px-2">
        {/* Title */}
        <div className="flex grow-5 relative">
          <h2 className="text-lg md:text-xl lg:text-2xl font-semibold">
            {section.title}
          </h2>
        </div>

        {/* Description and Link */}
        <div className="flex flex-col gap-4 grow-7 relative">
          {/* Avatars */}
          <div className="flex items-center relative">
            <div className="flex items-center -space-x-2">
              {section.avatars.map((avatar, index) => (
                <Image
                  key={index}
                  src={avatar.src}
                  alt={avatar.alt}
                  width={28}
                  height={28}
                  className="rounded-full border border-foreground-light/60 dark:border-foreground-dark/60 backdrop-blur-lg bg-black/30 transition-colors duration-300 relative"
                  style={{ zIndex: 30 - index * 10 }}
                />
              ))}
            </div>
          </div>

          {/* Description */}
          <span className="text-sm md:text-base font-light text-gray-600 dark:text-gray-400">
            {section.description}
          </span>

          {/* Link */}
          <div className="flex relative">
            <Link
              href={section.linkHref}
              title={section.linkText}
              aria-label={section.linkText}
              className="group flex items-center gap-2 text-sm text-cyan-600 dark:text-cyan-500 mb-6 hover:gap-3 active:gap-3 transition-all duration-300"
            >
              <span>{section.linkText}</span>
              <HiArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-active:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
