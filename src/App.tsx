import React from "react";
// @ts-ignore
import { Routes, Route } from "react-router-dom";

// Containers
import Dashboard from "./views/Dashboard";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/*" element={<Dashboard />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
