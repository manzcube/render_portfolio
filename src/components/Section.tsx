import React, { ReactNode } from "react";

interface Section {
  id: string;
  children: ReactNode;
}

const Section: React.FC<Section> = ({ id, children }) => {
  return (
    <div id={id} className="languages h-screen md:py-20 bg-white text-gray-800">
      <p className="uppercase text-center py-8 md:py-20 font-extrabold text-gray-700 text-2xl">
        {id}
      </p>
      {children}
    </div>
  );
};

export default Section;
