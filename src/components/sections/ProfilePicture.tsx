import Image from "next/image";
import { HiOutlineGlobeEuropeAfrica } from "react-icons/hi2";
import Badge from "../ui/Badge";

export default function ProfilePicture() {
  return (
    <div className="min-w-[10rem] h-fit flex flex-col items-center gap-5 flex-3 md:sticky md:top-16 px-4 pb-10 md:px-6 md:pb-16 lg:px-10 lg:pb-20">
      <div className="min-h-40 min-w-40 h-40 w-40 flex justify-center items-center relative rounded-full border border-foreground-light/60 dark:border-foreground-dark/60 backdrop-blur-lg bg-black/30">
        <div className="min-h-0 min-w-0 h-full w-full flex rounded-full overflow-hidden relative outline-0 isolate object-center">
          <Image
            src="/images/avatar.jpeg"
            width={160}
            height={160}
            alt="Alessandro Gammieri"
            className="h-full w-full object-cover overflow-clip absolute"
          />
        </div>
      </div>
      <div className="flex items-center gap-2 relative">
        <HiOutlineGlobeEuropeAfrica className="w-6 h-6 text-red-400 dark:text-red-300" />
        <p>Italia/Roma</p>
      </div>
      <div className="flex flex-wrap gap-2 relative">
        <Badge>Italiano</Badge>
        <Badge>Inglese</Badge>
      </div>
    </div>
  );
}
