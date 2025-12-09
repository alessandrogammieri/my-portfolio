"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { WorkExperience as WorkExperienceType } from "@/lib/types";
import Lightbox from "@/components/ui/Lightbox";

interface WorkExperienceProps {
  experiences: WorkExperienceType[];
}

export default function WorkExperience({ experiences }: WorkExperienceProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    alt: string;
    width: number;
    height: number;
  } | null>(null);

  const openLightbox = (image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  }) => {
    setSelectedImage(image);
    setLightboxOpen(true);
  };

  return (
    <div className="min-w-0 w-full relative">
      <h2 className="text-3xl md:text-4xl font-semibold text-balance mb-6">
        Esperienze
      </h2>
      <div className="min-w-0 w-full flex flex-col gap-10 relative mb-10">
        {experiences.map((experience) => (
          <div
            key={experience.id}
            className="min-w-0 w-full flex flex-col relative"
          >
            <div className="min-w-0 w-full flex flex-col sm:flex-row justify-between items-start sm:items-end relative mb-1">
              {experience.companyUrl ? (
                <Link
                  href={experience.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={experience.company}
                  className="text-lg font-semibold"
                >
                  {experience.company}
                </Link>
              ) : (
                <p className="text-lg font-semibold">{experience.company}</p>
              )}
              <span className="text-gray-600 dark:text-gray-400">
                {experience.period}
              </span>
            </div>
            <span className="text-sm text-cyan-600 dark:text-cyan-500 mb-6">
              {experience.role}
            </span>
            {experience.consultingFor && (
              <p>
                Consulenza c/o{" "}
                <Link
                  href={experience.consultingFor.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={experience.consultingFor.name}
                  className="font-semibold"
                >
                  {experience.consultingFor.name}
                </Link>
              </p>
            )}
            <ul className="flex flex-col relative gap-4 list-disc ps-10 my-4">
              {experience.achievements.map((achievement, index) => (
                <li key={index}>{achievement}</li>
              ))}
            </ul>
            {experience.images && experience.images.length > 0 && (
              <div className="min-w-0 w-full flex flex-wrap gap-3 relative pt-6 ps-10">
                {experience.images.map((image, index) => (
                  <div
                    key={index}
                    className="min-w-64 h-36 flex relative rounded-lg border border-foreground-light/60 dark:border-foreground-dark/60"
                  >
                    <button
                      onClick={() => openLightbox(image)}
                      className="min-w-0 w-full flex flex-col relative overflow-hidden cursor-pointer rounded-lg isolate outline-0 hover:opacity-80 transition-opacity duration-200"
                      aria-label={`Apri ${image.alt} in lightbox`}
                    >
                      <Image
                        src={image.src}
                        width={image.width}
                        height={image.height}
                        alt={image.alt}
                        className="h-full w-full object-cover"
                      />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxOpen && selectedImage && (
        <Lightbox
          image={selectedImage}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </div>
  );
}
