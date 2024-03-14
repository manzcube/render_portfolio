import React from "react";

interface ServiceBox {
  title: string;
  text: string;
  icon: React.ReactNode;
}

const ServiceBox: React.FC<ServiceBox> = ({ title, text, icon }) => {
  return (
    <div className="box transition-all duration-300">
      <div className="flex justify-between">
        <h1 className="font-extrabold text-lg mb-5">{title}</h1>
        {icon}
      </div>
      <p className="font-thin text-xs tracking-wider">{text}</p>
    </div>
  );
};

export default ServiceBox;
