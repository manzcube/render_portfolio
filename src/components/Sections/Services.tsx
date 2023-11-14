import React from "react";

// Components
import PricingCard from "../PricingCard";

// Media
import rubik from "../../resources/rubik.png";
import brain from "../../resources/maze.png";

const Services: React.FC = () => {
  return (
    <div
      id="services"
      className="relative bg-gray-50 min-h-screen w-full md:py-20 border-t md:p-20"
    >
      <p className="uppercase text-center py-10 font-extrabold text-sky-900 text-lg">
        Services
      </p>
      <div className="flex flex-wrap">
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
