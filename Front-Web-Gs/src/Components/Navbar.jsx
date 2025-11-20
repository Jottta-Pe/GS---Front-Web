import { Link } from "react-router-dom";
import Darkmode from "./Darkmode";


export default function Navbar() {

  return (
    <nav className="bg-[#9bd4b0] dark:bg-[#2b382b] text-gray-700 dark:text-white px-6 py-4 flex justify-between items-center font-sans h-20 text-2xl transition-colors relative">
      <Link to="/" className="hover:underline"><h1 className="font-bold text-3xl">Compile RH</h1></Link>
      <div className="flex gap-4 items-center">
        <Link to="/Suporte" className="hover:underline font-semibold">Suporte</Link>
        <Link to="/Sobre" className="hover:underline font-semibold">Sobre</Link>
        <Darkmode />
      </div>
    </nav>
  );
}