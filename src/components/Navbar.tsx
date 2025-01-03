import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Compoentns
import Button from "./Button";

const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState("introduction");

  console.log(activeSection);

  useEffect(() => {
    const handleScroll = () => {
      // Get the scroll position
      const scrollY = window.scrollY;

      // Calc the position of each section
      const introductionSection = document.getElementById("introduction");
      const servicesSection = document.getElementById("what I do");
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
          setActiveSection("what I do");
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
      window.scrollTo({
        top: section.offsetTop - 30,
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      className="w-full fixed flex justify-center sm:justify-between items-center z-30 p-2 py-4 text-xs text-gray-900 bg-white"
      id="Navbar"
    >
      <Link
        to="/"
        className="text-xs hidden sm:flex lg:text-lg lg:tracking-widest ml-6"
      >
        MANZCUBE
      </Link>
      <div className="flex gap-4 w-fit">
        <Button
          activeSection={activeSection}
          sectionId="introduction"
          scrollFunc={scrollToSection}
        />
        <Button
          activeSection={activeSection}
          sectionId="what I do"
          scrollFunc={scrollToSection}
        />
        <Button
          activeSection={activeSection}
          sectionId="experience"
          scrollFunc={scrollToSection}
        />
      </div>
    </div>
  );
};

export default Navbar;
