import React, { useState, useEffect, useRef } from "react";

// Style
import "../style/Components.css";

// Components
import ServiceBox from "../components/ServiceBox";
import { Link } from "react-router-dom";

const Services: React.FC = () => {
  const [contactOpen, setContactOpen] = useState(false);
  return (
    <div
      id="services"
      className="bg-black flex flex-col justify-between min-h-screen w-full p-10"
    >
      <div>
        <h1 className="text-center font-extrabold text-md md:text-2xl mt-10">
          CUSTOM SOLUTIONS
        </h1>
        <p className="w-full text-center text-xs text-gray-50 my-5 font-thin tracking-wide">
          Boost your business with custom applications. I bring your unique
          ideas to life.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row gap-5 p-10">
        <ServiceBox
          title="Design"
          text="First, let's have a conversation to discuss your needs and explore different solutions that work for you."
        />
        <ServiceBox
          title="Build"
          text="I build and code from scratch, ensuring that your project it's unique and not based on pre-made templates."
        />
        <ServiceBox
          title="Test and Review"
          text="We'll test and refine the project together, making sure it meets your expectations and business needs."
        />
        <ServiceBox
          title="Launch"
          text="I ensure your project is launched in a secure cloud environment that's easy to maintain and cost-effective."
        />
      </div>
      <div>
        <a
          className="px-5 py-3 border border-white hover:bg-white hover:text-gray-900 transition-all duration-300"
          href="https://contact-us-8b1325.zapier.app"
        >
          Contact Me
        </a>
      </div>
    </div>
  );
};

export default Services;
