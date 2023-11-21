import React from "react";

// Style
import "../../style/Components.css";

// Components
import Project from "../Project";

// Media
import skualo from "../../resources/skualo.png";
import mm from "../../resources/mm.png";
import mido from "../../resources/mido.png";

const Experience: React.FC = () => {
  return (
    <div id="experience" className="min-h-screen text-gray-800 bg-white">
      <p id="experience-section-title">working experience</p>
      <div className="flex pb-10 flex-wrap justify-around">
        <Project
          image={skualo}
          title="SKUALO"
          subtitle="Diving Center's website with Fareharbor Booking system API. Mostly practicing components reusability."
          url="https://skualo-8badb.web.app"
        />
        <Project
          image={mm}
          title="Mixing Media Design products agency "
          subtitle="Design products agency website for Barcelona's biggest Italian furnishments representative. Including brands, about the members and aiming for a clean desing."
          url="https://mixing-media.web.app"
        />
        <Project
          image={mido}
          title="Mido Worflow application"
          subtitle="Tailored productivity web app for diving centers. Organize employees, activities, boats and shifts using Drag&Drop."
          url="https://mido.onrender.com"
        />
      </div>
    </div>
  );
};

export default Experience;
