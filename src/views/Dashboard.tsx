import React from "react";

// Style
import "../style/index.css";

// Components
import Introduction from "../containers/Introduction.tsx";
import Experience from "../containers/Experience.tsx";
import Services from "../containers/Services.tsx";

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
