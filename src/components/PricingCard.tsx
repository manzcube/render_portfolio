import React from "react";
import "../style/Components.css";

interface PricingPlan {
  image: string;
  title: string;
  text: string;
  features: string[];
}

const PricingCard: React.FC<PricingPlan> = ({
  image,
  features,
  text,
  title,
}) => {
  return (
    <div className="rounded-md div-shadow max-w-sm mx-auto bg-white p-10 flex flex-col justify-between items-center">
      <img src={image} className="w-44" alt="" />
      <p className="text-center uppercase text-xl text-gray-800 font-extrabold mt-5">
        {title}
      </p>
      <div className="text-start">
        <p className="text-xs my-3 text-stone-500">{text}</p>
        <ul className="my-5">
          {features.map((feature, index) => (
            <li
              key={index}
              className="flex items-center text-gray-500 gap-2 text-xs"
            >
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
        </ul>
        <div className="flex">
          <a
            href={process.env.REACT_APP_MAIL_TO}
            className="w-full p-2 text-center bg-sky-900 rounded shadow-xl text-white text-xs hover:bg-white hover:text-sky-900 border border-sky-900 transition-all duration-500"
          >
            Contact Developer
          </a>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
