import React, { useState } from "react";
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

const resume = require("../resources/Software_Engineer_Resume.pdf");

const Dashboard: React.FC = () => {
  return (
    <div className="text-white relative">
      <SideNavbar />
      <div className="sm:ml-20">
        <div
          id="introduction"
          className="h-screen bg-gray-100 flex flex-col lg:flex-row justify-center items-center gap-10 text-blue-500 w-full"
        >
          <img
            src={pic}
            alt="pic"
            className="w-32 h-32 md:w-56 md:h-56 object-cover shadow-2xl rounded-full"
          />
          <div className="p-4 text-gray-700 space-y-2 md:space-y-5 uppercase font-extrabold">
            <p className="text-sm md:text-md">Hi there! i'm</p>
            <h1 className="text-3xl md:text-6xl space-x-5">
              <span className="text-blue-700">Marc</span>
              <span className="text-gray-700">Alzamora</span>
            </h1>
            <p className="text-gray-500 text-xs md:text-sm max-w-md font-semibold">
              A Fullstack developer focused on MERN stack, with interest in
              Golang, web security and creating useful web applications.
            </p>
            <div className="flex pt-10 md:pt-0 items-center gap-8">
              <a
                href={resume}
                download
                className="py-3 px-5 text-xs bg-blue-700 text-white rounded-full border border-blue-700 hover:opacity-90 hover:bg-white hover:text-blue-700 transition-all duration-500"
              >
                Resume
              </a>
              {/* Social Media */}
              <a
                className="p-2 rounded-md shadow-sm hover:shadow-xl hover:scale-105 bg-white"
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/marc-alzamora/"
              >
                <img src={linkedin} alt="" className="w-6" />
              </a>
              <a
                className="p-2 rounded-md shadow-sm hover:shadow-xl hover:scale-105 bg-white"
                target="_blank"
                rel="noreferrer"
                href="https://github.com/manzcube"
              >
                <img src={github} alt="" className="w-6" />
              </a>
              <a
                className="p-2 rounded-md shadow-sm hover:shadow-xl hover:scale-105 bg-white"
                target="_blank"
                rel="noreferrer"
                href="https://twitter.com/manzcube"
              >
                <img src={twitter} alt="" className="w-6" />
              </a>
              <a
                className="text-md capitalize font-bold flex justify-center items-center text-white p-2 border border-red-400 rounded-md bg-red-400 hover:text-red-400 hover:bg-white transition-all duration-300"
                href={process.env.REACT_APP_MAIL_TO}
              >
                Gmail
              </a>
            </div>
          </div>
        </div>
        <div id="tech" className="min-h-screen md:py-20 border-t md:p-20">
          <p className="uppercase text-center py-8 md:py-20 font-extrabold text-gray-700 text-2xl">
            tech stack
          </p>
          <div className="w-full p-10 gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <TechLang image={pic1} progress="w-full" />
            <TechLang image={pic2} progress="w-5/6" />
            <TechLang image={pic3} progress="w-1/2" />
            <TechLang image={pic7} progress="w-full" />
            <TechLang image={pic8} progress="w-1/2" />
            <TechLang image={pic4} progress="w-5/6" />
            <TechLang image={pic5} progress="w-3/4" />
            <TechLang image={pic6} progress="w-5/6" />
            <TechLang image={pic9} progress="w-1/5" />
          </div>
        </div>

        {/* Languages Section */}
        <Section
          id="languages"
          children={
            <div className="flex flex-col md:flex-row md:justify-around gap-20 px-10">
              <div>
                <img className="h-8 md:h-16 relative" src={eng} alt="" />
                <span className="absolute ml-20 -mt-6 md:mt-5 md:-ml-5">
                  C1 IELTS Certificate
                </span>
              </div>
              <div>
                <img className="h-8 md:h-16 relative" src={esp} alt="" />
                <span className="absolute ml-20 -mt-6 md:mt-5 md:-ml-5">
                  Native Speaker
                </span>
              </div>
              <div>
                <img
                  className="relative h-8 w-8 md:h-16 md:w-16 rounded-lg md:rounded-xl opacity-90"
                  src={cat}
                  alt=""
                />
                <span className="absolute ml-20 -mt-6 md:mt-5 md:-ml-5">
                  Native Speaker
                </span>
              </div>
            </div>
          }
        />

        <div id="experience" className="md:py-20 text-gray-800">
          <p className="uppercase text-center pt-20 font-extrabold text-gray-700 text-2xl">
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
      </div>
    </div>
  );
};

export default Dashboard;
