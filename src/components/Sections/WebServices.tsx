import React, { useState, useEffect, useRef } from "react";

// Style
import "../../style/Components.css";

// Components
import SingleService from "../Service";

// Media
import rubik from "../../resources/rubik.png";
import brain from "../../resources/maze.png";

const WebServices: React.FC = () => {
  return (
    <div id="experience" className="min-h-screen text-gray-800 bg-white">
      <p id="experience-section-title">web services</p>

      <div className="w-full relative md:w-1/2 bg-white min-h-[120vh] md:min-h-screen p-5 sm:px-10 md:py-20">
        <SingleService
          image={brain}
          from={1690}
          black={false}
          title="Custom Solutions"
          features={[
            "Applications tailored to specific business requirements",
            "Workflow Applications",
            "Customer Relationship Management(CRM)",
          ]}
          text="Boost your business with custom applications. I bring your unique ideas to life."
        />
      </div>
    </div>
  );
};

export default WebServices;
