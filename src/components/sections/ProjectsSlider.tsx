"use client";

import { useState } from "react";
import Image from "next/image";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { Project, ProjectsSliderProps } from "@/lib/types";
import { projects as allProjects } from "@/data/projects";

export default function ProjectsSlider({
  projects,
  startIndex = 0,
  count,
}: ProjectsSliderProps) {
  // Se projects è passato, usalo direttamente
  // Altrimenti usa startIndex e count per selezionare da allProjects
  const displayProjects =
    projects ||
    (count ? allProjects.slice(startIndex, startIndex + count) : allProjects);

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((prev) =>
      prev === 0 ? displayProjects.length - 1 : prev - 1
    );
  };

  const goToNext = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((prev) =>
      prev === displayProjects.length - 1 ? 0 : prev + 1
    );
  };

  const goToSlide = (e: React.MouseEvent, index: number) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex(index);
  };

  return (
    <div className="w-full">
      <div className="min-w-0 w-full flex flex-col gap-3 relative">
        <div className="min-w-0 w-full flex relative">
          <div className="min-w-0 w-full flex flex-col relative overflow-hidden">
            {/* Slider Container */}
            <div className="group relative w-full flex justify-center">
              <div className="relative w-full max-w-[960px] overflow-hidden rounded-2xl">
                {displayProjects.map((project, index) => (
                  <div
                    key={project.id}
                    className="transition-opacity duration-500 ease-in-out"
                    style={{
                      opacity: index === currentIndex ? 1 : 0,
                      visibility: index === currentIndex ? "visible" : "hidden",
                      position:
                        index === currentIndex ? "relative" : "absolute",
                      top: index === currentIndex ? "auto" : 0,
                      left: index === currentIndex ? "auto" : 0,
                      width: "100%",
                      pointerEvents: index === currentIndex ? "auto" : "none",
                    }}
                  >
                    <div className="relative w-full rounded-2xl overflow-hidden border border-foreground-light/20 dark:border-foreground-dark/20 bg-background/50 backdrop-blur-sm">
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={960}
                        height={0}
                        className="w-full h-auto"
                        style={{ objectFit: "contain" }}
                      />
                    </div>
                  </div>
                ))}

                {/* Previous Button */}
                {currentIndex > 0 && (
                  <button
                    type="button"
                    onClick={goToPrevious}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full bg-white/10 dark:bg-black/30 backdrop-blur-md border border-white/20 dark:border-white/10 hover:bg-white/20 dark:hover:bg-black/50 transition-all duration-200 z-10 cursor-pointer opacity-0 group-hover:opacity-100"
                    aria-label="Previous slide"
                  >
                    <HiChevronLeft className="w-4 h-4 text-white" />
                  </button>
                )}

                {/* Next Button */}
                {currentIndex < displayProjects.length - 1 && (
                  <button
                    type="button"
                    onClick={goToNext}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full bg-white/10 dark:bg-black/30 backdrop-blur-md border border-white/20 dark:border-white/10 hover:bg-white/20 dark:hover:bg-black/50 transition-all duration-200 z-10 cursor-pointer opacity-0 group-hover:opacity-100"
                    aria-label="Next slide"
                  >
                    <HiChevronRight className="w-4 h-4 text-white" />
                  </button>
                )}
              </div>
            </div>

            {/* Dots Navigation */}
            <div className="flex justify-center gap-2 mt-4">
              {displayProjects.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={(e) => goToSlide(e, index)}
                  className={`transition-all duration-300 rounded-full cursor-pointer ${
                    index === currentIndex
                      ? "h-0.5 bg-cyan-500"
                      : "h-0.5 bg-gray-400 dark:bg-gray-600 hover:bg-gray-500 dark:hover:bg-gray-500"
                  }`}
                  style={{
                    width: `${100 / displayProjects.length}%`,
                  }}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
