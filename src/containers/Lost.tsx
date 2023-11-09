import React from "react";
const logo = require("../resources/logo2.png");

const Lost: React.FC = () => {
  return (
    <div className="pt-24 bg-gray-50 w-full p-5 md:p-20 min-h-screen flex flex-col items-center">
      <div className="w-50 text-sky-800 my-20">
        <p className="font-bold text-4xl mb-2">What you value the most?</p>
        <p className="w-100 text-lg">
          Personally, I value time upon all things, this is why I charge for
          project, instead of hourly. In this way we can have a better
          customization for your needs.
        </p>
        <img src={logo} className="w-32" alt="" />
      </div>
    </div>
  );
};

export default Lost;
