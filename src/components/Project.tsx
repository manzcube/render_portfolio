// Lib
import React, { useState } from "react";

// Style
import "../style/Components.css";

interface ProjectProps {
  title: string;
  subtitle: string;
  image: string;
  url: string;
  iconsList: string[] | null;
}

const Project: React.FC<ProjectProps> = ({
  title,
  subtitle,
  image,
  url,
  iconsList,
}) => {
  const [onHover, setOnHover] = useState(false);

  return (
    <a
      target="_blank"
      href={url}
      className="Project"
      onMouseEnter={() => setOnHover(true)}
      onMouseLeave={() => setOnHover(false)}
    >
      <div className="relative">
        <img
          src={image}
          className={`object-cover border rounded-top cursor-pointer${
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
      <div className="p-5 pb-0">
        <div className="text-sm sm:text-md md:text-lg font-bold">{title}</div>
        <div className="mb-5 text-xs text-gray-500 sm:text-xs md:text-sm">
          {subtitle}
        </div>
      </div>
      <div className="flex w-full p-8 pt-0 gap-5">
        {iconsList?.map((icon, i) => (
          <img className="h-5" key={i} src={icon} alt="icon-image" />
        ))}
      </div>
    </a>
  );
};

export default Project;
