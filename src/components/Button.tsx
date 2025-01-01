import React from "react";

// Style
import "../style/Components.css";

// Types
import { IButton } from "../types/custom-elements";

const Button: React.FC<IButton> = ({
  selectionId,
  scrollFunc,
  activeSection,
}) => {
  return (
    <button
      className={`navbar-button ${
        activeSection === selectionId ? "button-active" : ""
      }`}
      onClick={() => scrollFunc(selectionId)}
    >
      {selectionId.toUpperCase()}
    </button>
  );
};

export default Button;
