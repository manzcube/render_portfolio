import React from "react";
// @ts-ignore
import { Routes, Route } from "react-router-dom";

// Containers
import Dashboard from "./containers/Dashboard.tsx";
import Services from "./containers/Services.tsx";
import Navbar from "./components/Navbar.tsx";
import Contact from "./containers/Contact.tsx";
import Lost from "./containers/Lost.tsx";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element={<Dashboard />} />
      </Routes>
    </>
  );
};

export default App;
