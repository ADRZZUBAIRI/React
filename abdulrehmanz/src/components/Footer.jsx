// src/components/Footer.jsx
import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <p>Connect with me:</p>
      <a
        href="https://www.linkedin.com/in/your-profile"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin />
      </a>
      <a
        href="https://github.com/your-profile"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub />
      </a>
    </footer>
  );
};

export default Footer;
