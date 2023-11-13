import React, { useState } from "react";

// Style
import "../style/FloatingIcons.css";

import pic from "../resources/profile_picture.jpg";

import pic1 from "../resources/techIcons/react.png";
import pic2 from "../resources/techIcons/fire.png";
import pic3 from "../resources/techIcons/git.png";
import pic4 from "../resources/techIcons/mongo.png";
import pic5 from "../resources/techIcons/node.png";
import pic6 from "../resources/techIcons/sass.png";
import pic7 from "../resources/techIcons/tail.png";
import pic8 from "../resources/techIcons/ts.png";
import pic9 from "../resources/techIcons/go.png";

import linkedin from "../resources/linkedin.png";
import github from "../resources/github.png";
import twitter from "../resources/twitter.png";

import eng from "../resources/united-kingdom.png";
import esp from "../resources/spain.png";
import cat from "../resources/ddd.jpg";

import skualo from "../resources/skualo.png";
import mm from "../resources/mm.png";

import Project from "../components/Project.tsx";
import Section from "../components/Section.tsx";
import SideNavbar from "../components/SideNavbar.tsx";
import TechLang from "../components/TechLang.tsx";

const socialLink =
  "p-2 rounded-md shadow-sm hover:shadow-xl bg-white border border-white hover:border-blue-700 transition-all duration-500";
const resume = require("../resources/Software_Engineer_Resume.pdf");

const Dashboard: React.FC = () => {
  return (
    <div className="text-white relative">
      <SideNavbar />
      <div className="sm:ml-20 bg-gray-100 overflow-hidden">
        <div
          id="introduction"
          className="h-screen w-full z-20 relative flex flex-col lg:flex-row justify-center items-center gap-10 text-blue-500 pt-20 lg:pt-5 p-5"
        >
          {/* <div className="absolute w-full -z-10 top-0 flex floating-stack-icons">
            <img src={pic1} alt="pic1" className="icon icon-1" />
            <img src={pic2} alt="pic2" className="icon icon-2" />
            <img src={pic3} alt="pic3" className="icon icon-3" />
            <img src={pic4} alt="pic4" className="icon icon-4" />
            <img src={pic5} alt="pic5" className="icon icon-5" />
            <img src={pic6} alt="pic6" className="icon icon-6" />
            <img src={pic7} alt="pic7" className="icon icon-7" />
            <img src={pic8} alt="pic8" className="icon icon-8" />
            <img src={pic9} alt="pic9" className="icon icon-9" />
          </div> */}

          <img
            src={pic}
            alt="pic"
            className="w-32 lg:w-56 xl:w-72 h-auto object-cover shadow-2xl rounded-full"
          />
          <div className="p-4 text-gray-700 space-y-2 md:space-y-5 uppercase font-extrabold">
            <p className="text-sm lg:text-md">Hi there! i'm</p>
            <h1 className="text-3xl lg:text-6xl space-x-5">
              <span className="text-blue-700">Marc</span>
              <span className="text-gray-700">Alzamora</span>
            </h1>
            <p className="text-gray-500 text-xs lg:text-sm max-w-md font-semibold">
              Experienced MERN FullStack developer with a passion for Golang
              seeking professional opportunities in Sydney.
            </p>
            <p className="text-gray-500 text-xs lg:text-sm max-w-md font-semibold">
              Enthusiastic about Rubik's Cubes and spacecrafts.
            </p>
            <p id="skill-features">
              <span>Time Management</span>
              <span>Goal-Directed</span>
              <span>Critical thinking</span>
            </p>
            <div className="flex gap-10 px-2 pt-4">
              <img className="h-4 w-4" src={eng} alt="I speak english" />
              <img className="h-4 w-4" src={esp} alt="I speak spanish" />
              <img
                className="h-4 w-4 rounded-sm"
                src={cat}
                alt="I speak catalan"
              />
            </div>
            <div className="flex pt-3 md:pt-10 md:pt-0 items-center gap-8">
              <a
                href={resume}
                download
                className="py-3 px-5 text-xs bg-blue-700 text-white rounded-full border border-blue-700 hover:opacity-90 hover:bg-white hover:text-blue-700 transition-all duration-500"
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
                className="text-sm capitalize  font-bold flex justify-center items-center text-white py-2 px-4 border border-red-400 rounded-md bg-red-400 hover:text-red-400 hover:bg-white transition-all duration-300"
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
        <div id="experience" className="md:py-20 text-gray-800 bg-white">
          <p className="uppercase text-center pt-20 font-extrabold text-gray-700 text-lg sm:text-2xl">
            working experience
          </p>
          <div className="py-10 flex flex-wrap justify-center">
            <Project
              image={skualo}
              title="SKUALO"
              subtitle="Diving Center's website with Fareharbor"
              url="https://skualo-8badb.web.app"
            />
            <Project
              image={mm}
              title="Mixing Media Design products agency "
              subtitle="Design products agency "
              url="https://mixing-media.web.app"
            />
          </div>
        </div>
        {/* <div
          id="tech"
          className="relative h-screen w-full md:py-20 border-t md:p-20"
        >
          <p className="uppercase w-full text-center py-8 font-extrabold text-gray-700 text-2xl">
            tech stack
          </p>
          <div className="absolute w-full h-screen floating-stack-icons">
            <img src={pic1} alt="pic1" className="icon icon-1" />
            <img src={pic2} alt="pic2" className="icon icon-2" />
            <img src={pic3} alt="pic3" className="icon icon-3" />
            <img src={pic4} alt="pic4" className="icon icon-4" />
            <img src={pic5} alt="pic5" className="icon icon-5" />
            <img src={pic6} alt="pic6" className="icon icon-6" />
            <img src={pic7} alt="pic7" className="icon icon-7" />
            <img src={pic8} alt="pic8" className="icon icon-8" />
            <img src={pic9} alt="pic9" className="icon icon-9" />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Dashboard;
