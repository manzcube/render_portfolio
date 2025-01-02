import React from "react";
// @ts-ignore
import { Routes, Route } from "react-router-dom";

// Containers
import Dashboard from "./views/Dashboard";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import D0A1 from "./views/D0A1";
import D0a1PrivacyPolicy from "./views/d0a1PrivacyPolicy";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/d0a1" element={<D0A1 />} />
        <Route path="/d0a1-privacy-policy" element={<D0a1PrivacyPolicy />} />
        <Route path="/*" element={<Dashboard />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
