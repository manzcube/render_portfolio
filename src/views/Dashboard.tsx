import React from "react";

// Style
import "../style/index.css";

// Components
import Introduction from "../containers/Introduction";
import Experience from "../containers/Experience";
import Services from "../containers/Services";

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
