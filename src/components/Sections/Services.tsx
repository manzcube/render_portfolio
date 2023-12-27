import React, { useState, useEffect, useRef } from "react";

// Style
import "../../style/Components.css";

// Components
import Service from "../Service";

// Media
import rubik from "../../resources/rubik.png";
import brain from "../../resources/maze.png";

const Services: React.FC = () => {
  return (
    <div
      id="services"
      className="relative flex flex-col flex-col-reverse md:flex-row min-h-screen md:h-screen w-full"
    >
      <p className="absolute z-20 w-full text-center mt-10 font-extrabold uppercase services-text">
        what i do
      </p>
      <div className="w-full relative md:w-1/2 bg-white min-h-[120vh] md:min-h-screen p-5 sm:px-10 md:py-20">
        <Service
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
      <div className="w-full relative md:w-1/2 bg-gray-800 min-h-[100vh] sm:px-10 pt-24 pb-10 p-5 md:py-20">
        <Service
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

export default Services;
