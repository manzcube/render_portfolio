import React from "react";
import "../style/FloatingIcons.css";

import pic1 from "../resources/techIcons/react.png";
import pic2 from "../resources/techIcons/fire.png";
import pic3 from "../resources/techIcons/git.png";
import pic4 from "../resources/techIcons/mongo.png";
import pic5 from "../resources/techIcons/node.png";
import pic6 from "../resources/techIcons/sass.png";
import pic7 from "../resources/techIcons/tail.png";
import pic8 from "../resources/techIcons/ts.png";
import pic9 from "../resources/techIcons/go.png";

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
    </div>
  );
};

export default FloatingIcons;
