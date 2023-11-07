import React, { useState } from "react";

import "../style/Components.css";

interface Project {
  title: string;
  subtitle: string;
  image: string;
  url: string;
}

const Project: React.FC<Project> = ({ title, subtitle, image, url }) => {
  const [onHover, setOnHover] = useState(false);

  return (
    <a
      target="_blank"
      href={url}
      className="Project m-5 md:m-20 max-w-[50ch]"
      onMouseEnter={() => setOnHover(true)}
      onMouseLeave={() => setOnHover(false)}
    >
      <div className="text-sm sm:text-md md:text-lg font-bold">{title}</div>
      <div className="mb-5 text-xs text-gray-500 sm:text-xs md:text-sm">
        {subtitle}
      </div>
      <div className="relative">
        <img
          src={image}
          className={`object-cover rounded cursor-pointer ${
            onHover ? "brightness-50" : ""
          }`}
          alt=""
        />
        <span
          className={`absolute text-white pb-10 font-bold text-md inset-0 flex items-center justify-center h-full ${
            onHover ? "flex" : "hidden"
          }`}
        >
          Click here to visit website
        </span>
      </div>
    </a>
  );
};

export default Project;
