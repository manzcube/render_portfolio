import React from "react";

interface ServiceBox {
  title: string;
  text: string;
}

const ServiceBox: React.FC<ServiceBox> = ({ title, text }) => {
  return (
    <div className="box transition-all duration-300">
      <h6 className="font-bold mb-5">{title}</h6>
      <p className="font-thin">{text}</p>
    </div>
  );
};

export default ServiceBox;
