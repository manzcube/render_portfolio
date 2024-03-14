import React from "react";

// Style
import "../style/index.css";

// import Experience from "../containers/Experience";
// import Services from "../containers/Services";

// Components
import Introduction from "../containers/Introduction";

// Lazy loading components
const Experience = React.lazy(() => import("../containers/Experience"));
const Services = React.lazy(() => import("../containers/Services"));

const Dashboard: React.FC = () => {
  return (
    <div className="text-white relative">
      <Introduction />
      <React.Suspense fallback={<div>Loading Services...</div>}>
        <Services />
      </React.Suspense>
      <React.Suspense fallback={<div>Loading Projects...</div>}>
        <Experience />
      </React.Suspense>
    </div>
  );
};

export default Dashboard;
