import LiveTime from "../ui/LiveTime";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <header className="min-w-0 w-full sticky top-0 flex justify-between z-50 px-6 py-4">
      <div className="min-w-0 w-full flex items-center">
        <p className="text-sm">Italy/Rome</p>
      </div>
      <div className="min-w-0 w-full flex justify-center relative">
        <Navigation />
      </div>
      <div className="min-w-0 w-full flex justify-end items-center">
        {/* <LiveTime></LiveTime> */}
      </div>
    </header>
  );
}
