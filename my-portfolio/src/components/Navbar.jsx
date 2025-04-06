import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import "./Navbar.css"; // Assuming you have a CSS file for styling

const Navbar = ({ isDarkMode, toggleTheme }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="container">
      <nav className="navbar">
        <div className="logo">
          <Link to="/">Abdul Rehman</Link>
        </div>
        <div className="nav-icon" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
        <motion.div
          className={`nav-links ${menuOpen ? "open" : ""}`}
          initial={{
            opacity: window.innerWidth >= 768 ? 1 : 0,
            x: window.innerWidth >= 768 ? 0 : "100%",
          }}
          animate={{
            opacity: menuOpen || window.innerWidth >= 768 ? 1 : 0,
            x: menuOpen || window.innerWidth >= 768 ? 0 : "100%",
          }}
          transition={{ duration: 0.3 }}
        >
          <Link to="/" onClick={closeMenu}>
            Home
          </Link>
          <Link to="/about" onClick={closeMenu}>
            About
          </Link>
          <Link to="/portfolio" onClick={closeMenu}>
            Portfolio
          </Link>
          <Link to="/contact" onClick={closeMenu}>
            Contact
          </Link>
        </motion.div>
      </nav>
    </div>
  );
};

export default Navbar;
