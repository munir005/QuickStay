import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";
import { UserButton } from "@clerk/react";

function OwnerNavbar() {
  return (
    <div className=" fixed top-0 right-0 z-70 w-full flex items-center justify-between h-20 px-4 md:px-8 border-b border-gray-300 py-3 bg-white transition-all duration-300">
        <Link to="/">
        <img src={assets.logo} alt="Logo" className="h-9" />
        </Link>
        <UserButton />
    </div>
  );
}

export default OwnerNavbar;
