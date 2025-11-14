import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";

export default function Layouts() {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
