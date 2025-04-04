import React from "react";
import { Link } from "react-router-dom";
import { FaSun, FaMoon } from "react-icons/fa";

const Navbar = ({ toggleTheme }) => {
  return (
    <nav className="navbar">
      <div className="logo">Abdul Rehman</div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <button className="theme-toggle" onClick={toggleTheme}>
        {toggleTheme ? <FaMoon /> : <FaSun />}
      </button>
    </nav>
  );
};

export default Navbar;
