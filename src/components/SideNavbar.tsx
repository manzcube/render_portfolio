import React, { useEffect, useState } from "react";

const SideNavbar = () => {
  const [activeSection, setActiveSection] = useState("introduction");
  console.log(activeSection);
  useEffect(() => {
    const handleScroll = () => {
      // Get the scroll position
      const scrollY = window.scrollY;

      // Calc the position of each section
      const introductionSection = document.getElementById("introduction");
      const techSection = document.getElementById("tech");
      const languagesSection = document.getElementById("languages");
      const experienceSection = document.getElementById("experience");

      // Check if the elements exist before comparing their positions
      if (introductionSection && experienceSection) {
        // Calculate the position of each section
        const introductionSectionTop = introductionSection.offsetTop - 100;
        const experienceSectionTop = experienceSection.offsetTop - 100;

        // Determine which section is in view
        if (
          scrollY >= introductionSectionTop &&
          scrollY < experienceSectionTop
        ) {
          setActiveSection("introduction");
        } else {
          setActiveSection("experience");
        }
        // if (scrollY >= introductionSectionTop && scrollY < techSectionTop) {
        //   setActiveSection("introduction");
        // } else if (scrollY >= techSectionTop && scrollY < languagesSectionTop) {
        //   setActiveSection("tech");
        // } else if (
        //   scrollY >= languagesSectionTop &&
        //   scrollY < experienceSectionTop
        // ) {
        //   setActiveSection("languages");
        // } else if (scrollY >= experienceSectionTop) {
        //   setActiveSection("experience");
        // }
      }
    };
    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="hidden sm:flex h-screen bg-sky-800 flex flex-col fixed left-0 w-20 py-44 justify-between items-center">
      <a
        className={`${
          activeSection === "introduction" ? "bg-blue-400 p-2" : "p-4"
        } transition-all duration-300 rounded-md`}
        href="#introduction"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
          />
        </svg>
      </a>
      {/* <a
        className={`${
          activeSection === "tech" ? "bg-blue-400 p-2" : "p-4"
        } transition-all duration-300 rounded-md`}
        href="#tech"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3"
          />
        </svg>
      </a> */}
      <a
        className={`${
          activeSection === "experience" ? "bg-blue-400 p-2" : "p-4"
        } transition-all duration-300 rounded-md`}
        href="#experience"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
          />
        </svg>
      </a>
      {/* <a
        className={`${
          activeSection === "languages" ? "bg-blue-400 p-2" : "p-4"
        } transition-all duration-300 rounded-md`}
        href="#languages"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802"
          />
        </svg>
      </a> */}
    </div>
  );
};

export default SideNavbar;
