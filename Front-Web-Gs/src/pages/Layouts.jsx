import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";

export default function Layouts() {
  return (
    <div className="min-h-screen bg-[#e8f5e9] dark:bg-[#1d261d] transition-colors">
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
