import React from "react";
import "./Home.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const projects = [
  {
    title: "My VA Gurus",
    link: "https://myvagurus.com",
    description:
      "Virtual Assistant Business Website built with WordPress + Elementor.",
  },
  {
    title: "Rampitus",
    link: "https://rampitus.com",
    description: "Accessibility solutions platform with custom design.",
  },
  {
    title: "Principled Residential",
    link: "https://principledresidential.com",
    description: "Clean and modern real estate investor site.",
  },
];

const Home = () => {
  return (
    <>
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

      <div className="second">
        {/* About Section */}
        <section className="about" id="about">
          <h2>About Me</h2>
          <p>
            I'm a passionate web developer specializing in WordPress and React.
            I build sleek, user-friendly, and highly functional websites
            tailored to client goals.
          </p>
        </section>

        {/* Portfolio Section */}
        <section className="portfolio" id="portfolio">
          <h2>My Work</h2>
          <div className="portfolio-grid">
            {projects.map((project, idx) => (
              <a
                key={idx}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="portfolio-item"
              >
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </a>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="contact" id="contact">
          <h2>Contact Me</h2>
          <p>Let’s work together! Reach out to me via email or social media.</p>
          <div className="social-links">
            <a
              href="https://github.com/abdulrehmanz"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/abdulrehmanz"
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
    </>
  );
};

export default Home;
