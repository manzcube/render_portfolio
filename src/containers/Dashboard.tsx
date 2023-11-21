import React from "react";

// Style
import "../style/index.css";

// Components
import SideNavbar from "../components/Layout/SideNavbar.tsx";
import Header from "../components/Layout/Header.tsx";
import Introduction from "../components/Sections/Introduction.tsx";
import Experience from "../components/Sections/Experience.tsx";
import Services from "../components/Sections/Services.tsx";

const Dashboard: React.FC = () => {
  return (
    <div className="text-white relative">
      <SideNavbar />
      <div className="sm:ml-20 bg-gray-50 overflow-hidden">
        <Header />
        <Introduction />
        <Experience />
        <Services />
      </div>
    </div>
  );
};

export default Dashboard;
