import React from "react";
import { Link, useLocation } from "react-router-dom";

const logo = require("../resources/logo2.png");

const Navbar: React.FC = () => {
  // Location
  const location = useLocation();
  const currentLocation = location.pathname.split("/")[1];
  let inDashboard = currentLocation === "" || currentLocation.startsWith("#");
  let inServices = currentLocation === "services";
  let inContact = currentLocation === "contact";

  return (
    <div className="w-full fixed z-10 flex p-3 justify-between items-center text-xs bg-blue-500">
      <img src={logo} className="w-8" alt="" />
      <Link
        to="/"
        className="font-extrabold text-lg tracking-widest text-white ml-44"
      >
        MANZCUBE
      </Link>
      <div className="flex sm:gap-4 w-fit">
        <Link
          className={`${
            inDashboard ? "bg-blue-600 shadow-inner" : ""
          } p-2 rounded text-white transition-all duration-500`}
          to="/"
        >
          Dashboard
        </Link>
        <Link
          className={`${
            inServices ? "bg-blue-600 shadow-inner" : ""
          } p-2 rounded text-white transition-all duration-500`}
          to="/services"
        >
          Services
        </Link>
        {/* <Link
          className={`${
            inContact ? "bg-blue-600 shadow-inner" : ""
          } p-2 rounded text-white transition-all duration-500`}
          to="/contact"
        >
          Contact Me
        </Link> */}
      </div>
    </div>
  );
};

export default Navbar;
