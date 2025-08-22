import ProfileDescription from "@/components/sections/ProfileDescription";
import ProfilePicture from "@/components/sections/ProfilePicture";

export const metadata = {
  title: {
    default: "Profilo",
  },
  description:
    "Sono uno sviluppatore full stack specializzato nello sviluppo di applicazioni web moderne e performanti. Realizzo soluzioni digitali su misura per ogni esigenza.",
};

export default function About() {
  return (
    <div className="min-h-[calc(100vh-10.5rem)] md:min-h-[calc(100vh-9rem)] min-w-0 w-full flex justify-center relative p-3 md:p-6 lg:p-10">
      <main className="min-h-0 min-w-0 w-full flex justify-center relative">
        <div className="max-w-5xl w-full flex flex-col relative">
          <div className="min-w-0 w-full flex flex-col md:flex-row justify-center relative">
            <ProfilePicture />
            <ProfileDescription />
          </div>
        </div>
      </main>
    </div>
  );
}
