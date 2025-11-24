"use client";

import { useEffect } from "react";
import Image from "next/image";

interface LightboxProps {
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  onClose: () => void;
}

export default function Lightbox({ image, onClose }: LightboxProps) {
  useEffect(() => {
    // Blocca lo scroll del body
    document.body.style.overflow = "hidden";

    // Chiudi con ESC
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 bg-black/10"
      style={{ backdropFilter: "blur(12px)" }}
    >
      {/* Layer cliccabile per chiudere */}
      <div className="cursor-pointer absolute inset-0" onClick={onClose} />

      {/* Contenitore immagine */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative w-[90vw] max-h-[90vh] pointer-events-auto">
          <Image
            src={image.src}
            width={image.width}
            height={image.height}
            alt={image.alt}
            className="w-full h-auto max-h-[90vh] object-contain"
            quality={100}
            priority
            unoptimized
          />
        </div>
      </div>
    </div>
  );
}
