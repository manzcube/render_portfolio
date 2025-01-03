import React from "react";

// Style
import "../style/Components.css";

// Types
import { IButton } from "../types/custom-elements";
import { Link } from "react-router-dom";

const Button: React.FC<IButton> = ({
  sectionId,
  scrollFunc,
  activeSection,
}) => {
  return (
    <Link
      to={activeSection}
      className={`navbar-button ${
        activeSection === sectionId ? "button-active" : ""
      }`}
      onClick={() => scrollFunc(sectionId)}
    >
      {sectionId.toUpperCase()}
    </Link>
  );
};

export default Button;
