import React, { useState, useEffect, useRef } from "react";

// Style
import "../../style/Components.css";

// Components
import SingleService from "../Service";

// Media
import rubik from "../../resources/rubik.png";
import brain from "../../resources/maze.png";

const RubikServices: React.FC = () => {
  return (
    <div id="experience" className="min-h-screen text-gray-800 bg-white">
      <p id="experience-section-title">rubik's cube private tutor</p>

      <div className="w-full relative md:w-1/2 bg-gray-800 min-h-[100vh] sm:px-10 pt-24 pb-10 p-5 md:py-20">
        <SingleService
          image={rubik}
          from={890}
          title="Websites and Landing pages"
          black={true}
          features={["Landing Pages", "Start-ups", "Single Page Applications"]}
          text="Start your online presence with stunning, high-speed, and cost-effective websites."
        />
      </div>
    </div>
  );
};

export default RubikServices;
