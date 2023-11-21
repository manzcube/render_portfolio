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
  const [seeMoreDropDown, setSeeMoreDropDown] = useState(false);

  return (
    <div className={` ${black ? "text-gray-200" : "text-gray-800"}`}>
      <img
        className={`mx-auto ${
          black ? "sm:mt-10 md:mt-16" : "mt-28 md:mt-16"
        } transition-all duration-300 ${
          seeMoreDropDown ? "max-w-[10ch]" : "max-w-[20ch] "
        }`}
        src={image}
        alt="webistes-landing-pages-services-icon"
      />
      <h1 className="text-md lg:text-xl xl:text-3xl uppercase mt-5 lg:my-10 text-center font-extrabold">
        {title}
      </h1>
      <p className="my-5 text-xs lg:tracking-wide">{text}</p>
      {seeMoreDropDown ? (
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
            From <span className="font-bold">{from}AUD</span>
          </p>
        </div>
      ) : (
        ""
      )}
      <div
        className={`left-0 h-32 md:h-16 lg:h-22 xl:h-36 ${
          black ? "bg-black" : "bg-white"
        } px-20 bottom-0 absolute w-full`}
      >
        <div className="flex gap-20">
          <button
            onClick={() => setSeeMoreDropDown(!seeMoreDropDown)}
            className={`py-2 w-full px-4 border transition-all duration-300 active:scale-95 ${
              black
                ? "border-white hover:bg-white hover:text-black"
                : "border-black hover:bg-black hover:text-white"
            }`}
          >
            {seeMoreDropDown ? "See Less" : "See More"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Service;
