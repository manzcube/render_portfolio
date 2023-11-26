import React, { useState, useEffect } from "react";

// Components
import FloatingIcons from "../FloatingIcons";

// Pictures
import pic from "../../resources/profile_picture.jpg";
import linkedin from "../../resources/linkedin.png";
import github from "../../resources/github.png";
import twitter from "../../resources/twitter.png";
import eng from "../../resources/united-kingdom.png";
import esp from "../../resources/spain.png";
import cat from "../../resources/ddd.jpg";
import time from "../../resources/time-management.png";
import target from "../../resources/target.png";
import thinking from "../../resources/thinking.png";

// Files
const resume = require("../../resources/Software_Engineer_Resume.pdf");

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
  const scale = 1 - scrollY / 2 / window.innerHeight;
  return (
    <div
      style={{
        opacity: opacity < 0 ? 0 : opacity,
        transform: `scale(${scale < 0.5 ? 0.5 : scale})`,
      }}
    >
      <div
        id="introduction"
        className="h-screen w-full z-20 relative flex flex-col lg:flex-row justify-center items-center gap-10 text-blue-500 lg:pt-5 p-5 pt-16 sm:pt-5"
      >
        <FloatingIcons />
        <img
          src={pic}
          alt="pic"
          className="w-32 lg:w-56 xl:w-72 h-auto object-cover shadow-2xl rounded-full"
        />
        <div className="p-4 text-gray-700 space-y-2 md:space-y-5 uppercase font-extrabold">
          <p className="text-sm lg:text-md">Hi there! i'm</p>
          <div className="text-3xl lg:text-6xl space-x-5 flex items-center">
            <p className="text-blue-700 animated-bouncing">Marc</p>
            <p className="text-gray-700 animated-bouncing-delayed">Alzamora</p>
          </div>
          <p className="text-gray-500 text-xs lg:text-sm max-w-md font-semibold">
            Experienced MERN FullStack developer with a passion for Golang
            seeking professional opportunities in Sydney.
          </p>
          <p className="text-gray-500 text-xs lg:text-sm max-w-md font-semibold">
            Enthusiastic about Rubik's Cubes and spacecrafts.
          </p>
          <p id="skill-features">
            <span className="flex items-center gap-1">
              <img src={time} className="w-3" alt="" />
              Time Management
            </span>
            <span className="flex items-center gap-1">
              <img src={target} className="w-3" alt="" />
              Goal-Directed
            </span>
            <span className="flex items-center gap-1">
              <img src={thinking} className="w-3" alt="" />
              Critical Thinking
            </span>
          </p>

          {/* Languages */}
          <div className="flex gap-10 px-2 pt-4">
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
              className="bounce-up-on-hover text-sm capitalize font-bold flex justify-center items-center text-white py-2 px-4 border border-red-500 rounded-full bg-red-500 hover:text-red-500 hover:bg-white transition-all duration-500"
              href={process.env.REACT_APP_MAIL_TO}
            >
              Gmail
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
