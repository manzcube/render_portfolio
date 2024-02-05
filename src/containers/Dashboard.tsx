import React from "react";

// Style
import "../style/index.css";

// Components
import Introduction from "../components/Sections/Introduction.tsx";
import Experience from "../components/Sections/Experience.tsx";
import Services from "../components/Sections/Services.tsx";

const Dashboard: React.FC = () => {
  return (
    <div className="text-white relative">
      <Introduction />
      <Services />
      <Experience />
    </div>
  );
};

export default Dashboard;
