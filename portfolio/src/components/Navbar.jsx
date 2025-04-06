import React, { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import "./Navbar.css";

const Navbar = ({ isDarkMode, toggleTheme }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 768 // Default to 768 on SSR
  );

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isDesktop = useMemo(() => windowWidth >= 768, [windowWidth]);

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
            opacity: isDesktop ? 1 : 0,
            x: isDesktop ? 0 : "100%",
          }}
          animate={{
            opacity: menuOpen || isDesktop ? 1 : 0,
            x: menuOpen || isDesktop ? 0 : "100%",
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
