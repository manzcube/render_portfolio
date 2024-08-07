import React, { useState, useEffect } from "react";

// Components
import FloatingIcons from "../components/FloatingIcons";

// Pictures
import pic from "../images/profile.webp";
import linkedin from "../images/linkedin.webp";
import github from "../images/github.webp";
import twitter from "../images/twitter.webp";
import eng from "../images/united-kingdom.webp";
import esp from "../images/spain.webp";
import cat from "../images/ddd.webp";

// Files
const resume = require("../images/Resume_nophone.pdf");

// Style
const socialLink =
  "p-2 rounded-md shadow-sm hover:shadow-2xl bg-white border border-white hover:scale-110 hover:border-blue-700 transition-all duration-500";

const Introduction: React.FC = () => {
  const [scrollY, setScrollY] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const opacity = 1 - scrollY / 2 / window.innerHeight;
  const scale = 1 - scrollY / 8 / window.innerHeight;
  return (
    <div
      style={{
        opacity: opacity < 0 ? 0 : opacity,
        transform: `scale(${scale < 0.5 ? 0.5 : scale})`,
      }}
    >
      <div
        id="introduction"
        className="min-h-screen w-full z-20 relative flex flex-col lg:flex-row justify-center items-center gap-4 md:gap-10 text-blue-500 lg:pt-0 p-5 pt-16 sm:pt-5"
      >
        <FloatingIcons />
        <div className="flex flex-col items-center gap-5">
          <img
            src={pic}
            alt="pic"
            className="w-28 lg:w-32 xl:w-56 h-auto object-cover shadow-2xl rounded-full"
          />
          <a
            className="py-1.5 px-3 md:py-2 md:px-4 w-fit mx-auto text-xs bg-gray-700 text-white rounded border border-gray-900 hover:opacity-90 hover:bg-white hover:text-gray-700 transition-all duration-500"
            href="#services"
          >
            Check out my Services
          </a>
        </div>
        <div className="p-4 text-gray-700 space-y-2 md:space-y-5 font-extrabold">
          <p className="text-md lg:text-lg font-extrabold">Hi there! I'm</p>
          <div className="text-2xl md:text-4xl lg:text-6xl space-x-5 flex items-center uppercase">
            <p className="text-blue-700 animated-bouncing">Marc</p>
            <p className="text-gray-900 animated-bouncing-delayed">Alzamora</p>
          </div>
          <p className="text-gray-900 text-xs lg:text-sm max-w-md font-thin">
            Full Stack Developer with a passion for creating innovative and
            unique solutions.
          </p>
          <div id="skill-features">
            <span className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-3 h-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                />
              </svg>
              Mallorca, Spain
            </span>
            <div className="relative language-hover-description">
              <img
                className="h-4 w-4 animated-bouncing"
                src={eng}
                alt="I speak english"
              />
              <p>C1 IELTS Certificate</p>
            </div>
            <div className="relative language-hover-description">
              <img
                className="h-4 w-4 animated-bouncing-delayed"
                src={esp}
                alt="I speak spanish"
              />
              <p>Native Speaker</p>
            </div>
            <div className="relative language-hover-description">
              <img
                className="h-4 w-4 animated-bouncing-delayed-2 rounded-sm opacity-90"
                src={cat}
                alt="I speak catalan"
              />
              <p>Native Speaker</p>
            </div>
          </div>

          <div className="flex pt-3 md:pt-10 md:pt-0 items-center gap-8">
            <a
              href={resume}
              download
              className="bounce-up-on-hover py-3 px-5 text-xs bg-blue-700 text-white rounded-full border border-blue-700 hover:opacity-90 hover:bg-white hover:text-blue-700 transition-all duration-500"
            >
              Resume
            </a>
            {/* Social Media */}
            <div className="hidden md:flex gap-5">
              <a
                className={socialLink}
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/marc-alzamora/"
              >
                <img src={linkedin} alt="" className="w-6" />
              </a>
              <a
                className={socialLink}
                target="_blank"
                rel="noreferrer"
                href="https://github.com/manzcube"
              >
                <img src={github} alt="" className="w-6" />
              </a>
              <a
                className={socialLink}
                target="_blank"
                rel="noreferrer"
                href="https://twitter.com/manzcube"
              >
                <img src={twitter} alt="" className="w-6" />
              </a>
            </div>

            <a
              className="bounce-up-on-hover text-xs capitalize font-bold flex justify-center items-center text-white py-3 px-5 border border-red-500 rounded-full bg-red-500 hover:text-red-500 hover:bg-white transition-all duration-500"
              href="https://contact-manzcube.zapier.app"
            >
              Contact Me
            </a>
          </div>

          <div className="flex gap-8 md:hidden p-4">
            <a
              className={socialLink}
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/marc-alzamora/"
            >
              <img src={linkedin} alt="" className="w-4" />
            </a>
            <a
              className={socialLink}
              target="_blank"
              rel="noreferrer"
              href="https://github.com/manzcube"
            >
              <img src={github} alt="" className="w-4" />
            </a>
            <a
              className={socialLink}
              target="_blank"
              rel="noreferrer"
              href="https://twitter.com/manzcube"
            >
              <img src={twitter} alt="" className="w-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
