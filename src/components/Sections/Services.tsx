import React from "react";

// Style
import "../../style/Components.css";

// Components
import PricingCard from "../PricingCard";

// Media
import rubik from "../../resources/rubik.png";
import brain from "../../resources/maze.png";

const Services: React.FC = () => {
  return (
    <div
      id="services"
      className="relative flex flex-col lg:flex-row min-h-screen w-full"
    >
      <p className="absolute w-full text-center mt-10 text-5xl font-extrabold uppercase services-text">
        Services
      </p>
      <div className="w-full lg:w-1/2 bg-black min-h-screen pt-24 pb-10 p-5 lg:p-20">
        <PricingCard
          image={rubik}
          title="Websites and Landing pages"
          features={[
            "Landing Pages",
            "For small businesses",
            "Start-ups",
            "Single Page Applications",
          ]}
          text="Start your online presence with our Basic Tier, perfect for creating user-friendly websites and eye-catching landing pages."
        />
      </div>
      <div className="w-full lg:w-1/2 bg-white h-screen p-5 lg:p-20">
        <PricingCard
          image={brain}
          title="Custom Solutions"
          features={[
            "Project Management Tools",
            "Workflow Automation Applications",
            "Customer Relationship Management(CRM)",
            "Document Management Systems(DMS)",
          ]}
          text="Push further your productivity and highlight your growing business over the competence."
        />
      </div>
    </div>
  );
};

export default Services;
