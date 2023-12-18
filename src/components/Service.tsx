import React, { useState } from "react";
import "../style/Components.css";

interface Service {
  image: string;
  title: string;
  text: string;
  black: boolean;
  from: number;
  features: string[];
}

const Service: React.FC<Service> = ({
  image,
  from,
  black,
  features,
  text,
  title,
}) => {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <div className={`${black ? "text-gray-200" : "text-gray-800"}`}>
      <img
        className={`mx-auto max-w-[14ch] ${
          black ? "sm:mt-10 md:mt-16" : "mt-28 md:mt-16"
        } transition-all duration-300`}
        src={image}
        alt="webistes-landing-pages-services-icon"
      />
      <h1
        className={`text-md lg:text-xl xl:text-3xl uppercase mt-5 lg:mb-5 lg:mt-10 text-center font-extrabold ${
          black ? "text-white" : "text-gray-800"
        }`}
      >
        {title}
      </h1>
      <p
        className={`text-center mb-10 ${
          black ? "text-gray-300" : "text-gray-500"
        } text-xs lg:tracking-wide px-8 lg:px-20`}
      >
        {text}
      </p>
      <div className="see-more-div">
        {features.map((feature: string, index: number) => (
          <li key={index} className="flex items-center gap-2 text-xs">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-3 h-3 text-green-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            {feature}
          </li>
        ))}
        <p className="my-3 text-sm">
          For{" "}
          <span
            className={`font-bold text-lg ${
              black ? "text-white" : "text-gray-800"
            }`}
          >
            {from} AUD
          </span>
        </p>
      </div>
      {contactOpen ? (
        <div className="flex gap-5">
          <a
            className={`rounded-full py-2 text-center mt-5 w-full px-4 border transition-all duration-300 active:scale-95 ${
              black
                ? "border-white hover:bg-white hover:text-gray-800"
                : "border-gray-800 hover:bg-gray-800 hover:text-white"
            }`}
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/marc-alzamora/"
          >
            LinkedIn
          </a>
          <a
            className={`rounded-full py-2 text-center mt-5 w-full px-4 border transition-all duration-300 active:scale-95 ${
              black
                ? "border-white hover:bg-white hover:text-gray-800"
                : "border-gray-800 hover:bg-gray-800 hover:text-white"
            }`}
            target="_blank"
            rel="noreferrer"
            href={process.env.REACT_APP_MAIL_TO}
          >
            Gmail
          </a>
        </div>
      ) : (
        <button
          onClick={() => setContactOpen(!contactOpen)}
          className={`rounded-full py-2 mt-5 w-full px-4 border transition-all duration-300 active:scale-95 ${
            black
              ? "border-white text-white hover:bg-white hover:text-gray-800"
              : "border-gray-800 hover:bg-gray-800 hover:text-white"
          }`}
        >
          I want to know more
        </button>
      )}
    </div>
  );
};

export default Service;
