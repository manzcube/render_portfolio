import React, { useState } from "react";
import lk from "../resources/linkedin.png";
import ca from "../resources/curved-arrow.jpg";

const Contact: React.FC = () => {
  return (
    <div className="w-full text-white h-screen text-blue-500 pt-20">
      <p className="text-start text-4xl p-10 font-bold">How to contact me?</p>
      <div className="p-20 flex flex-col md:flex relative items-center justify-center gap-10">
        <a
          rel="noreferer"
          className="relative"
          target="blank"
          href="https://linkedin.com/in/marc-alzamora"
        >
          <p className="absolute -top-11 -left-20 text-xs flex text-sky-700 font-bold">
            LinkedIn profile
          </p>
          <img className="w-28 rotate-45 right-0 -top-11 absolute" src={ca} />
          <img src={lk} className="w-20 rounded" alt="" />
        </a>
        <a
          className="w-20 relative flex items-center justify-between text-white rounded p-2 bg-red-400"
          href={process.env.REACT_APP_MAIL_TO}
        >
          <span className="absolute -top-5 left-28 text-xs flex w-96 text-sky-700 font-bold">
            Click to email me
            <img className="w-28 rotate-180 top-4 -left-10 absolute" src={ca} />
          </span>
          <span className="text-xl font-bold">G</span>
          Gmail
        </a>
      </div>
    </div>
  );
};

export default Contact;
