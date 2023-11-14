import React from "react";

// Components
import Project from "../Project";

// Media
import skualo from "../../resources/skualo.png";
import mm from "../../resources/mm.png";

const Experience: React.FC = () => {
  return (
    <div
      id="experience"
      className="md:py-20 min-h-screen text-gray-800 bg-white"
    >
      <p className="uppercase text-center pt-10 font-extrabold section-title text-gray-700">
        working experience
      </p>
      <div className="py-10 flex flex-wrap justify-around">
        <Project
          image={skualo}
          title="SKUALO"
          subtitle="Diving Center's website with Fareharbor"
          url="https://skualo-8badb.web.app"
        />
        <Project
          image={mm}
          title="Mixing Media Design products agency "
          subtitle="Design products agency "
          url="https://mixing-media.web.app"
        />
      </div>
    </div>
  );
};

export default Experience;
