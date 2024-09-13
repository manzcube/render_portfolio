import React from "react";

// Style
import "../style/Components.css";

import pic1 from "../images/techIcons/react.webp";
import pic2 from "../images/techIcons/fire.webp";
import pic3 from "../images/techIcons/git.webp";
import pic4 from "../images/techIcons/mongo.webp";
import pic5 from "../images/techIcons/node.webp";
import pic6 from "../images/techIcons/sass.webp";
import pic7 from "../images/techIcons/tail.webp";
import pic8 from "../images/techIcons/ts.webp";
import pic9 from "../images/techIcons/go.webp";
import pic10 from "../images/techIcons/redux.webp";
import pic11 from "../images/techIcons/js.webp";
import pic12 from "../images/techIcons/threejs.webp";

// Components
import Project from "../components/Project";

// Media
import skualo from "../images/projects/skualo.webp";
import mm from "../images/projects/mm.webp";
import mido from "../images/projects/mido.webp";
import cube from "../images/projects/rubiks.webp";
import cafe from "../images/projects/cafe.webp";

const Experience: React.FC = () => {
  return (
    <div id="experience" className="min-h-screen text-gray-900 bg-white">
      {/* <p id="experience-section-title">Projects</p> */}
      <div className="flex pb-10 flex-wrap justify-around">
        <Project
          image={skualo}
          iconsList={[pic11, pic1, pic3, pic2, pic7]}
          title="Skualo Diving Center"
          subtitle="Diving Center's website with Fareharbor Booking system API. Mostly practicing components reusability."
          // url="https://skualo-portocristo.com"
          url="https://skualo.onrender.com/"
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
        <Project
          image={cube}
          iconsList={[pic1, pic8, pic9, pic3, pic12]}
          title="Rubiks Cube Simulation"
          subtitle="Rubik's Cube 3D model with Go and THREE.js. Three.js representation of a 3x3 Rubik's Cube, with Go web server generating data structure and managing turning functionality."
          url="https://rubiks-cube-client.onrender.com"
        />
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
