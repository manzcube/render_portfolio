import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState("introduction");

  useEffect(() => {
    const handleScroll = () => {
      // Get the scroll position
      const scrollY = window.scrollY;

      // Calc the position of each section
      const introductionSection = document.getElementById("introduction");
      const servicesSection = document.getElementById("services");
      const experienceSection = document.getElementById("experience");

      // Check if the elements exist before comparing their positions
      if (introductionSection && experienceSection && servicesSection) {
        // Calculate the position of each section
        const introductionSectionTop = introductionSection.offsetTop - 100;
        const servicesSectionTop = servicesSection.offsetTop - 100;
        const experienceSectionTop = experienceSection.offsetTop - 100;

        // Determine which section is in view
        if (scrollY >= introductionSectionTop && scrollY < servicesSectionTop) {
          setActiveSection("introduction");
        } else if (
          scrollY >= servicesSectionTop &&
          scrollY < experienceSectionTop
        ) {
          setActiveSection("services");
        } else {
          setActiveSection("experience");
        }
      }
    };
    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offset = sectionId === "experience" ? -70 : -30; // Adjust this value to your desired offset
      window.scrollTo({
        top: section.offsetTop + offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      className="w-full fixed flex sm:hidden justify-between items-center z-30 p-2 text-xs bg-gray-900"
      id="Navbar"
    >
      <Link
        to="/"
        className="font-bold text-xs lg:text-lg lg:tracking-widest text-white ml-6"
      >
        MANZCUBE
      </Link>
      <div className="flex gap-4 w-fit">
        <button
          className={`${
            activeSection === "introduction" ? "bg-gray-500 shadow-inner" : ""
          } p-2 rounded text-white transition-all duration-500`}
          onClick={() => scrollToSection("introduction")}
        >
          Dashboard
        </button>

        <button
          className={`${
            activeSection === "services" ? "bg-gray-500 shadow-inner" : ""
          } p-2 rounded text-white transition-all duration-500`}
          onClick={() => scrollToSection("services")}
        >
          Services
        </button>
        <button
          className={`${
            activeSection === "experience" ? "bg-gray-500 shadow-inner" : ""
          } p-2 rounded text-white transition-all duration-500`}
          onClick={() => scrollToSection("experience")}
        >
          Experience
        </button>
      </div>
    </div>
  );
};

export default Navbar;
