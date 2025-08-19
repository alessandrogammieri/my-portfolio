import LiveTimeString from "../ui/LiveTimeString";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <header className="min-w-0 w-full fixed md:sticky bottom-4 md:bottom-auto md:top-0 flex justify-between z-50 px-6 py-2">
      <div className="min-w-0 w-full hidden md:flex md:items-center">
        <p className="text-sm">Italia/Roma</p>
      </div>
      <div className="min-w-0 w-full flex justify-center relative">
        <Navigation />
      </div>
      <div className="min-w-0 w-full hidden md:flex md:justify-end md:items-center">
        <LiveTimeString />
      </div>
    </header>
  );
}
