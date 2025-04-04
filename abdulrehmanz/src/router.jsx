import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home"; // Example page component
import About from "./pages/About"; // Another example page component

const RouterSetup = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default RouterSetup;
