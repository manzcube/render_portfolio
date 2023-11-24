import React from "react";

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
      className="relative flex flex-col md:flex-row min-h-screen md:h-screen w-full"
    >
      <p className="absolute z-20 w-full text-center mt-10 font-extrabold uppercase services-text">
        Services
      </p>
      <div className="w-full relative md:w-1/2 bg-black min-h-[100vh] sm:px-10 pt-24 pb-10 p-5 md:py-20">
        <Service
          image={rubik}
          from={890}
          title="Websites and Landing pages"
          black={true}
          features={[
            "Landing Pages",
            "For small businesses",
            "Start-ups",
            "Single Page Applications",
          ]}
          text="Start your online presence with a captivating website. I build visually stunning, high-speed, and cost-effective solutions from scratch."
        />
      </div>
      <div className="w-full relative md:w-1/2 bg-white min-h-[100vh] p-5 sm:px-10 md:py-20">
        <Service
          image={brain}
          from={1390}
          black={false}
          title="Custom Solutions"
          features={[
            "Shift Management Tools",
            "Workflow Automation Applications",
            "Customer Relationship Management(CRM)",
            "Document Management Systems(DMS)",
          ]}
          text="Boost your business with custom software. I bring your unique ideas to life, enhancing productivity and client management."
        />
      </div>
    </div>
  );
};

export default Services;
