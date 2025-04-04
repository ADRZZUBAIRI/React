// src/pages/Home.jsx
import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="home"
    >
      <h1>Welcome to My Portfolio</h1>
      <p>This is where I showcase my work and skills.</p>
    </motion.div>
  );
};

export default Home;
