import React, { useState } from "react";

// Style
import "../style/Components.css";

// Interfaces
import Project from "../interfaces/project";

const HorizontalProject: React.FC<Project> = ({
  title,
  subtitle,
  image,
  backgroundColor,
  url,
  position,
}) => {
  return (
    <div
      className={`w-full flex border border-gray-5 ${
        position === "left" ? "flex-row-reverse" : "flex-row"
      }`}
    >
      <div className={`w-2/3 p-10 `}>
        <div className="text-sm sm:text-md md:text-lg font-bold tracking-wider text-gray-900">
          {title}
        </div>
        <div className="mb-5 text-xs text-gray-600 sm:text-xs md:text-sm">
          {subtitle}
        </div>
      </div>
      <div className="w-1/3">
        <a target="_blank" href={url}>
          <div className="relative">
            <img
              src={image}
              className="object-cover w-fit shadow-xl cursor-pointer"
              alt="project image"
            />
          </div>
        </a>
      </div>
    </div>
  );
};

export default HorizontalProject;
