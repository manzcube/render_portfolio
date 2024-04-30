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
        activeSection === selectionId ? "bg-gray-700 text-white" : ""
      } py-1 px-3 font-bold text-gray-700 rounded transition-all duration-500`}
      onClick={() => scrollFunc(selectionId)}
    >
      {selectionId.toUpperCase()}
    </button>
  );
};

export default Button;
