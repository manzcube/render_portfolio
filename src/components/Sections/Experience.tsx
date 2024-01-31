import React from "react";

// Style
import "../../style/Components.css";

import pic1 from "../../resources/techIcons/react.png";
import pic2 from "../../resources/techIcons/fire.png";
import pic3 from "../../resources/techIcons/git.png";
import pic4 from "../../resources/techIcons/mongo.png";
import pic5 from "../../resources/techIcons/node.png";
import pic6 from "../../resources/techIcons/sass.png";
import pic7 from "../../resources/techIcons/tail.png";
import pic8 from "../../resources/techIcons/ts.png";
import pic9 from "../../resources/techIcons/go.png";
import pic10 from "../../resources/techIcons/redux.png";
import pic11 from "../../resources/techIcons/js.png";
import pic12 from "../../resources/techIcons/threejs.png";

// Components
import Project from "../Project";

// Media
import skualo from "../../resources/skualo.png";
import mm from "../../resources/mm.png";
import mido from "../../resources/mido.png";
import cube from "../../resources/rubiks.png";

const Experience: React.FC = () => {
  return (
    <div id="experience" className="min-h-screen text-gray-800 bg-white">
      <p id="experience-section-title">working experience</p>
      <div className="flex pb-10 flex-wrap justify-around">
        <Project
          image={skualo}
          iconsList={[pic11, pic1, pic3, pic2, pic7]}
          title="SKUALO"
          subtitle="Diving Center's website with Fareharbor Booking system API. Mostly practicing components reusability."
          url="https://skualo-8badb.web.app"
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
      </div>
    </div>
  );
};

export default Experience;
