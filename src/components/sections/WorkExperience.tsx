import Image from "next/image";

export default function WorkExperience() {
  return (
    <div className="min-w-0 w-full relative">
      <h2 className="text-3xl md:text-4xl font-semibold text-balance mb-6">
        Esperienze
      </h2>
      <div className="min-w-0 w-full flex flex-col gap-10 relative mb-10">
        <div className="min-w-0 w-full flex flex-col relative">
          <div className="min-w-0 w-full flex justify-between items-end relative mb-1">
            <span className="text-lg font-semibold">ADNKRONOS</span>
            <span className="text-gray-600 dark:text-gray-400">
              lug 2025 - Presente
            </span>
          </div>
          <span className="text-sm text-cyan-600 dark:text-cyan-500 mb-6">
            Full Stack Developer
          </span>
          <ul className="flex flex-col relative gap-4 list-disc ps-10 my-4">
            <li>
              Redesigned the UI/UX for the FLY platform, resulting in a 20%
              increase in user engagement and 30% faster load times.
            </li>
            <li>
              Spearheaded the integration of AI tools into design workflows,
              enabling designers to iterate 50% faster.
            </li>
          </ul>
          <div className="min-w-0 w-full flex flex-wrap gap-3 relative pt-6 ps-10">
            <div className="min-w-64 h-36 flex relative rounded-lg border border-foreground-light/60 dark:border-foreground-dark/60">
              <div className="min-w-0 w-full flex flex-col relative overflow-hidden cursor-pointer rounded-lg isolate outline-0">
                <Image
                  src="/images/avatar.jpeg"
                  width={255}
                  height={143}
                  alt="Alessandro Gammieri"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="min-w-0 w-full flex flex-col relative">
          <div className="min-w-0 w-full flex justify-between items-end relative mb-1">
            <span className="text-lg font-semibold">HAYS SOLUTIONS</span>
            <span className="text-gray-600 dark:text-gray-400">
              nov 2024 - giu 2025
            </span>
          </div>
          <span className="text-sm text-cyan-600 dark:text-cyan-500 mb-6">
            Full Stack Developer
          </span>
          <ul className="flex flex-col relative gap-4 list-disc ps-10 my-4">
            <li>
              Redesigned the UI/UX for the FLY platform, resulting in a 20%
              increase in user engagement and 30% faster load times.
            </li>
            <li>
              Spearheaded the integration of AI tools into design workflows,
              enabling designers to iterate 50% faster.
            </li>
          </ul>
          <div className="min-w-0 w-full flex flex-wrap gap-3 relative pt-6 ps-10">
            <div className="min-w-64 h-36 flex relative rounded-lg border border-foreground-light/60 dark:border-foreground-dark/60">
              <div className="min-w-0 w-full flex flex-col relative overflow-hidden cursor-pointer rounded-lg isolate outline-0">
                <Image
                  src="/images/avatar.jpeg"
                  width={255}
                  height={143}
                  alt="Alessandro Gammieri"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="min-w-64 h-36 flex relative rounded-lg border border-foreground-light/60 dark:border-foreground-dark/60">
              <div className="min-w-0 w-full flex flex-col relative overflow-hidden cursor-pointer rounded-lg isolate outline-0">
                <Image
                  src="/images/avatar.jpeg"
                  width={255}
                  height={143}
                  alt="Alessandro Gammieri"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="min-w-64 h-36 flex relative rounded-lg border border-foreground-light/60 dark:border-foreground-dark/60">
              <div className="min-w-0 w-full flex flex-col relative overflow-hidden cursor-pointer rounded-lg isolate outline-0">
                <Image
                  src="/images/avatar.jpeg"
                  width={255}
                  height={143}
                  alt="Alessandro Gammieri"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
