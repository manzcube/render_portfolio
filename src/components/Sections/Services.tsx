import React from "react";

// Style
import "../../style/Components.css";

// Components
import Service from "../Service";

// Media
import rubik from "../../resources/rubik.png";
import brain from "../../resources/maze.png";

const Services: React.FC = () => {
  return (
    <div
      id="services"
      className="relative flex flex-col lg:flex-row h-screen w-full"
    >
      <p className="absolute w-full text-center mt-10 font-extrabold uppercase services-text">
        Services
      </p>
      <div className="w-full relative lg:w-1/2 bg-black min-h-screen pt-24 pb-10 p-5 lg:p-20">
        <Service
          image={rubik}
          from={890}
          title="Websites and Landing pages"
          black={true}
          features={[
            "Landing Pages",
            "For small businesses",
            "Start-ups",
            "Single Page Applications",
          ]}
          text="Begin establishing your online presence with
           a stunning landing page, a single-page web application,
            or a comprehensive website featuring multiple views to
             elegantly showcase your products and services. I craft
              websites from the ground up, leveraging my proven
               infrastructure to deliver visually captivating, 
               high-speed, cost-effective, and entirely customized solutions."
        />
      </div>
      <div className="w-full relative lg:w-1/2 bg-white min-h-screen p-5 lg:p-20">
        <Service
          image={brain}
          from={1390}
          black={false}
          title="Custom Solutions"
          features={[
            "Project Management Tools",
            "Workflow Automation Applications",
            "Customer Relationship Management(CRM)",
            "Document Management Systems(DMS)",
          ]}
          text="Elevate your business and organization by developing
           custom software applications tailored to your unique needs
            and demands. Enhance productivity, streamline client management,
             and envision the features that can simplify your work—I'll bring them to life."
        />
      </div>
    </div>
  );
};

export default Services;
