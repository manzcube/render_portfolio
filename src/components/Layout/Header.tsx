import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <p className="text-center pt-5 hidden sm:flex">
      <Link
        to="/"
        className="font-extrabold text-xs md:text-lg text-center w-full lg:tracking-widest text-sky-900"
      >
        MANZCUBE
      </Link>
    </p>
  );
};

export default Header;
