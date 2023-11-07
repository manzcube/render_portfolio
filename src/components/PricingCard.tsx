import React from "react";

import "../style/Components.css";
import { Link } from "react-router-dom";

interface PricingPlan {
  name: string;
  price: string;
  color: string;
  text: string;
  features: string[];
}

const PricingCard: React.FC<PricingPlan> = ({
  color,
  name,
  price,
  features,
  text,
}) => {
  const labelColor =
    color === "green"
      ? "bg-green-500"
      : color === "orange"
      ? "bg-orange-500"
      : "bg-purple-500";

  return (
    <div className="rounded-xl div-shadow card-width relative bg-white p-10 flex flex-col justify-between">
      <div>
        <p
          className={`absolute -left-3 top-3 p-2 rounded ${labelColor} text-white text-xs shadow-xl`}
        >
          {name}
        </p>
        <h2 className="flex text-stone-800 font-bold text-5xl mt-8">
          <p className="text-2xl mr-1">€</p>
          {price}
        </h2>
        <p className="text-sm my-3 text-stone-500">{text}</p>
      </div>
      <div>
        <ul className="my-5">
          {features.map((feature, index) => (
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
        </ul>
        <div className="flex justify-center">
          <Link to="/contact" className="button">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
