import React from "react";

interface ServiceBox {
  title: string;
  text: string;
}

const ServiceBox: React.FC<ServiceBox> = ({ title, text }) => {
  return (
    <div className="box transition-all duration-300">
      <h6 className="font-extrabold text-lg mb-5">{title}</h6>
      <p className="font-thin text-xs tracking-wider">{text}</p>
    </div>
  );
};

export default ServiceBox;
