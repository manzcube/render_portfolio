import React from "react";

// Style
import "../style/Containers.css";

const pic1 = "/images/react.webp";
const pic2 = "/images/fire.webp";
const pic3 = "/images/git.webp";
const pic4 = "/images/mongo.webp";
const pic5 = "/images/node.webp";
const pic6 = "/images/sass.webp";
const pic7 = "/images/tail.webp";
const pic8 = "/images/ts.webp";
const pic9 = "/images/go.webp";
const pic10 = "/images/redux.webp";
const pic11 = "/images/js.webp";
const pic12 = "/images/threejs.webp";
const pic13 = "/images/expo.webp";

// Components
import Project from "../components/Project";

// Media
const skualo = "/images/skualo.webp";
const mm = "/images/mm.webp";
const mido = "/images/mido.webp";
const cube = "/images/rubiks.webp";
const cafe = "/images/cafe.webp";
const d0a1 = "/images/d0a1.webp";

const Experience: React.FC = () => {
  return (
    <div id="experience" className="min-h-screen text-gray-900 bg-white">
      <p className="font-extrabold uppercase text-center py-10 text-md md:text-2xl mt-10">
        SOME OF THE PROJECTS I DID
      </p>
      <div className="flex pb-10 flex-wrap justify-around">
        <Project
          image={skualo}
          iconsList={[pic11, pic1, pic3, pic2, pic7]}
          title="Skualo Diving Center"
          subtitle="Diving Center's website with Fareharbor Booking system API. Mostly practicing components reusability."
          url="https://skualo-portocristo.com"
        />
        <Project
          image={d0a1}
          iconsList={[pic13, pic1, pic3, pic8]}
          title="D0A1 Accounting"
          subtitle="D0A1 is an offline app for tracking income and expenses. Manage assets, categorize transactions, and view summaries, all stored privately on your device. Simple, customizable, and secure."
          url="/d0a1"
        />
        <Project
          image={mm}
          iconsList={[pic1, pic3, pic11, pic2, pic7]}
          title="Mixing Media Design products agency "
          subtitle="Design products agency website for Barcelona's biggest Italian furnishments representative. Including brands, about the members and aiming for a clean desing."
          url="https://mixing-media.web.app"
        />
        <Project
          image={mido}
          iconsList={[pic4, pic1, pic11, pic5, pic10, pic7]}
          title="Mido Worflow application"
          subtitle="Tailored productivity web app for diving centers. Organize employees, activities, boats and shifts using Drag&Drop."
          url="https://mido.onrender.com"
        />
        {/* <Project
          image={cube}
          iconsList={[pic1, pic8, pic9, pic3, pic12]}
          title="Rubiks Cube Simulation"
          subtitle="Rubik's Cube 3D model with Go and THREE.js. Three.js representation of a 3x3 Rubik's Cube, with Go web server generating data structure and managing turning functionality."
          url="https://rubiks-cube-client.onrender.com"
        /> */}
        <Project
          image={cafe}
          iconsList={[pic1, pic8, pic3, pic6]}
          title="Cafe Website"
          subtitle="Generic website for Cafes with languages and end-to-end made components."
          url="https://cafe-website-m90j.onrender.com/"
        />
      </div>
    </div>
  );
};

export default Experience;
