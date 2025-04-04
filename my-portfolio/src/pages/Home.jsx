import React from "react";
import "./Home.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <h1 className="hero-title">
          Hi, I'm <span>Abdul Rehman</span>
        </h1>
        <p className="hero-subtitle">WordPress Developer | React Enthusiast</p>
        <a href="#portfolio" className="hero-btn">
          View My Work
        </a>
      </section>

      {/* About Section */}
      <section className="about" id="about">
        <h2>About Me</h2>
        <p>
          I'm a passionate web developer specializing in modern WordPress and
          React projects. I build sleek, user-friendly, and highly functional
          websites.
        </p>
      </section>

      {/* Portfolio Section */}
      <section className="portfolio" id="portfolio">
        <h2>My Work</h2>
        <div className="portfolio-grid">
          <div className="portfolio-item">Project 1</div>
          <div className="portfolio-item">Project 2</div>
          <div className="portfolio-item">Project 3</div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact" id="contact">
        <h2>Contact Me</h2>
        <p>Let's work together! Reach out to me via email or social media.</p>
        <div className="social-links">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a href="mailto:abdulrehmanz@abdulrehmanz.online">
            <FaEnvelope />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
