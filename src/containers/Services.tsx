import React from "react";
import PricingCard from "../components/PricingCard";

const Services: React.FC = () => {
  return (
    <div className="pt-24 bg-gray-50 w-full p-5 md:p-20 min-h-screen flex flex-col items-center">
      <p className="my-auto text-muted text-gray-500">
        Currently working on this...
      </p>
      {/* <div className="w-50 text-sky-800 my-20">
        <p className="font-bold text-4xl mb-2">What you value the most?</p>
        <p className="w-100 text-lg">
          Personally, I value time upon all things, this is why I charge for
          project, instead of hourly. In this way we can have a better
          customization for your needs.
        </p>
      </div>
      <div className="w-50 flex flex-wrap gap-5">
        <PricingCard
          color="green"
          name="Basic"
          price="499"
          features={[
            "Landing Pages",
            "For small businesses",
            "Start-ups",
            "Social Media Integration",
          ]}
          text="Start your online presence with our Basic Tier, perfect for creating user-friendly websites and eye-catching landing pages."
        />
        <PricingCard
          color="orange"
          name="Standard"
          price="799"
          features={[
            "For medium-sized businesses",
            "CRMs",
            "Custom applications for businesses needs",
            "Cheap cost and well designed web sites",
          ]}
          text="Take your digital capabilities to the next level with our Standard Tier, offering dynamic web applications for seamless user experiences."
        />
        <PricingCard
          color="purple"
          name="Premium"
          price="999"
          features={[
            "E-commerces",
            "For large enterprises",
            "Fine-tuned design, and complex logistics",
          ]}
          text="Empower your organization with highly specialized web applications tailored to specific business needs."
        />
      </div> */}
    </div>
  );
};

export default Services;
