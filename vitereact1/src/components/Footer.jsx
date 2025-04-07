// src/components/Footer.jsx
import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        © {new Date().getFullYear()} Abdul Rehman Zubairi. All Rights Reserved.
      </p>
      <div>
        <a
          href="https://www.linkedin.com/in/abdul-rehman-z"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/ADRZZUBAIRI/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
