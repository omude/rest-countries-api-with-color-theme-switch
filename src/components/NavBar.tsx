import { Link } from "react-router-dom";
import DarkModeBtn from "./DarkModeBtn";

const NavBar = () => {
  return (
    <div className="bg-element flex justify-between items-center px-20 py-8 text-color shadow-md">
      <Link
        to="/"
        className="font-semibold text-[22px] decoration-none cursor-pointer"
      >
        Where in the World?
      </Link>
     <DarkModeBtn/>
    </div>
  );
};

export default NavBar;
