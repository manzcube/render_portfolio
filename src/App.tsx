import React from "react";
// @ts-ignore
import { Routes, Route } from "react-router-dom";

// Containers
import Dashboard from "./views/Dashboard.tsx";
import Footer from "./components/Layout/Footer.tsx";
import Navbar from "./components/Layout/Navbar.tsx";

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
