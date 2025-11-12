import { VideoProps } from "@/lib/types";

export default function Video({
  src,
  controls = true,
  autoPlay = false,
  loop = false,
  muted = false,
  playsInline = true,
  preload = "metadata",
  className = "",
  poster,
}: VideoProps) {
  return (
    <div className="w-full">
      <div className="min-w-0 w-full flex flex-col gap-3 relative">
        <div className="min-w-0 w-full flex relative">
          <div className="min-w-0 w-full flex flex-col relative overflow-hidden">
            <div className="relative w-full flex justify-center">
              <div className="relative w-full max-w-[960px] overflow-hidden rounded-2xl">
                <div className="relative w-full rounded-2xl overflow-hidden border border-foreground-light/20 dark:border-foreground-dark/20 bg-background/50 backdrop-blur-sm">
                  <video
                    controls={controls}
                    autoPlay={autoPlay}
                    loop={loop}
                    muted={muted}
                    playsInline={playsInline}
                    preload={preload}
                    poster={poster}
                    className={`w-full h-auto ${className}`}
                    aria-label="Video player"
                  >
                    <source src={src} type="video/mp4" />
                    Il tuo browser non supporta il tag video.
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
