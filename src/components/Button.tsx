import React from "react";

interface IButton {
  selectionId: string;
  activeSection: string;
  scrollFunc: (section: string) => void;
}

const Button: React.FC<IButton> = ({
  selectionId,
  scrollFunc,
  activeSection,
}) => {
  return (
    <button
      className={`${
        activeSection === selectionId ? "bg-gray-50" : ""
      } p-2 font-extrabold text-gray-700 rounded-full  transition-all duration-500`}
      onClick={() => scrollFunc(selectionId)}
    >
      {selectionId.toUpperCase()}
    </button>
  );
};

export default Button;
