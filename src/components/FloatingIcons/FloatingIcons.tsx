import React from "react";
import "./FloatingIcons.css";

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
const pic11 = "/images/threejs.webp";
const pic12 = "/images/expo.webp";

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
      <img src={pic12} alt="pic12" className="icon icon-12" />
    </div>
  );
};

export default FloatingIcons;
