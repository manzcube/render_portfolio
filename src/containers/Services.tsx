import React from "react";

// Style
import "../style/Components.css";

// Components
import ServiceBox from "../components/ServiceBox";

const Services: React.FC = () => {
  return (
    <div
      id="services"
      className="bg-gray-900 flex flex-col justify-between min-h-screen w-full p-16"
    >
      <div>
        <h1 className="text-center font-extrabold text-md md:text-2xl mt-10">
          WHAT I DO?
        </h1>
        <p className="w-full text-center text-xs text-gray-50 my-5 font-thin tracking-wide">
          I create web applications. Boost your business with custom
          applications. I bring your unique ideas to life.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row gap-5 p-5 lg:p-10">
        <ServiceBox
          title="Design"
          text="First, let's have a conversation to discuss your needs and explore different solutions that work for you."
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
              />
            </svg>
          }
        />
        <ServiceBox
          title="Build"
          text="I build and code from scratch, ensuring that your project it's unique and not based on pre-made templates."
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
              />
            </svg>
          }
        />
        <ServiceBox
          title="Test and Review"
          text="We'll test and refine the project together, making sure it meets your expectations and business needs."
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
              />
            </svg>
          }
        />
        <ServiceBox
          title="Launch"
          text="I ensure your project is launched in a secure cloud environment that's easy to maintain and cost-effective."
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
              />
            </svg>
          }
        />
      </div>
      <div>
        <a
          className="px-6 py-4 border rounded-full border-white text-sm hover:bg-white hover:text-gray-900 transition-all duration-300"
          href="https://contact-manzcube.zapier.app"
        >
          I am interested
        </a>
      </div>
    </div>
  );
};

export default Services;
