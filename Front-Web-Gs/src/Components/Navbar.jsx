import { Link } from "react-router-dom";


export default function Navbar() {

  return (
    <nav className="bg-[#9bd4b0] text-black px-6 py-4 flex justify-between items-center font-serif h-20 text-2xl">
      <Link to="/" className="hover:underline"><h1 className="font-bold text-3xl">Compile RH</h1></Link>
      <div className="flex gap-4 items-center">
        <Link to="/Suporte" className="hover:underline">Suporte</Link>
        <Link to="/Sobre" className="hover:underline">Sobre</Link>
      </div>
    </nav>
  );
}