import React from "react";

// Constants
import TechProps from "../interfaces/types";

const TechLang: React.FC<TechProps> = ({ image, progress }) => {
  return (
    <div className="flex items-center gap-5 my-3">
      <img src={image} className="w-8 md:w-14 image-cover" alt="" />
      <div className="w-full bg-gray-200 rounded-full h-1 md:h-2.5 dark:bg-sky-200">
        <div
          className={`bg-blue-600 h-1 md:h-2.5 rounded-full ${progress}`}
        ></div>
      </div>
    </div>
  );
};

export default TechLang;
