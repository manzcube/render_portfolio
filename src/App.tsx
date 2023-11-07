import React from "react";
// @ts-ignore
import { Routes, Route } from "react-router-dom";

// Containers
import Dashboard from "./containers/Dashboard.tsx"
import Services from "./containers/Services.tsx"
import Navbar from "./components/Navbar.tsx";
import Contact from "./containers/Contact.tsx";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
    
  );
}

export default App;
