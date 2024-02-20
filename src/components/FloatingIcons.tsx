import React from "react";
import "../style/FloatingIcons.css";

import pic1 from "../images/techIcons/react.png";
import pic2 from "../images/techIcons/fire.png";
import pic3 from "../images/techIcons/git.png";
import pic4 from "../images/techIcons/mongo.png";
import pic5 from "../images/techIcons/node.png";
import pic6 from "../images/techIcons/sass.png";
import pic7 from "../images/techIcons/tail.png";
import pic8 from "../images/techIcons/ts.png";
import pic9 from "../images/techIcons/go.png";
import pic10 from "../images/techIcons/redux.png";
import pic11 from "../images/techIcons/threejs.png";

const FloatingIcons: React.FC = () => {
  return (
    <div className="floating-stack-icons">
      <img src={pic1} alt="pic1" className="icon icon-1" />
      <img src={pic2} alt="pic2" className="icon icon-2" />
      <img src={pic3} alt="pic3" className="icon icon-3" />
      <img src={pic4} alt="pic4" className="icon icon-4" />
      <img src={pic5} alt="pic5" className="icon icon-5" />
      <img src={pic6} alt="pic6" className="icon icon-6" />
      <img src={pic7} alt="pic7" className="icon icon-7" />
      <img src={pic8} alt="pic8" className="icon icon-8" />
      <img src={pic9} alt="pic9" className="icon icon-9" />
      <img src={pic10} alt="pic10" className="icon icon-10" />
      <img src={pic11} alt="pic11" className="icon icon-11" />
    </div>
  );
};

export default FloatingIcons;
