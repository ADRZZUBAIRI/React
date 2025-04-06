import React from "react";
import "./Home.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const projects = [
  {
    title: "My VA Gurus",
    link: "https://myvagurus.com",
    description:
      "A Virtual Assistant Business website built using WordPress and Elementor. It’s designed for efficiency and user-friendliness, showcasing services and team members.",
  },
  {
    title: "Rampitus",
    link: "https://rampitus.com",
    description:
      "An accessibility solutions platform with a custom design. It features products like wheelchair ramps, stairlifts, and platform lifts, focusing on inclusivity.",
  },
  {
    title: "PRSRCM",
    link: "https://prsrcm.com",
    description:
      "A modern website for PRSRCM, a medical billing service. It’s designed to be user-friendly and informative, showcasing their services and expertise.",
  },
];

const services = [
  {
    title: "WordPress Development",
    description:
      "I specialize in building fast, responsive, and user-friendly websites using WordPress. Whether it's a custom theme or plugin development, I deliver high-quality websites that meet your business needs.",
  },
  {
    title: "React Development",
    description:
      "Leveraging React, I build dynamic and highly interactive web applications. From single-page apps to complex solutions, I craft seamless user experiences with cutting-edge technologies.",
  },
  {
    title: "E-Commerce Solutions",
    description:
      "I offer full-stack e-commerce solutions using WordPress (WooCommerce) or React. Whether you're starting a new store or enhancing an existing one, I help you create a user-friendly shopping experience.",
  },
];

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Hero Section */}
      <motion.section
        className="hero"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="hero-title">
          Hi, I'm <span>Abdul Rehman</span>
        </h1>
        <p className="hero-subtitle">
          WordPress Developer | React Enthusiast | Builder of Functional and
          Beautiful Websites
        </p>
        <a href="#portfolio-home" className="hero-btn">
          View My Work
        </a>
      </motion.section>

      <div className="content-wrapper">
        {/* About Section */}
        <motion.section
          className="about"
          id="about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2>About Me</h2>
          <p>
            I'm a passionate web developer with over 2 years of experience in
            WordPress and React. I focus on creating sleek, responsive, and
            highly functional websites that align with my clients' goals. I
            strive to build intuitive, accessible designs that deliver an
            optimal user experience.
          </p>
        </motion.section>

        {/* Services Section */}
        <motion.section
          className="services"
          id="services"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2>Services</h2>
          <div className="services-grid">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                className="service-item"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Portfolio Section */}
        <motion.section
          className="portfolio-home"
          id="portfolio-home"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2>My Work</h2>
          <div className="portfolio-grid-home">
            {projects.map((project, idx) => (
              <motion.a
                key={idx}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="portfolio-item-home"
                whileHover={{ scale: 1.05 }}
                aria-label={`View project: ${project.title}`}
              >
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </motion.a>
            ))}
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          className="contact-home"
          id="contact-home"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h2>Contact Me</h2>
          <p>
            Let’s collaborate! If you’re interested in working together or
            simply want to connect, reach out via email or social media.
          </p>
          <div className="social-links">
            <a
              href="https://github.com/ADRZZUBAIRI/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
            >
              <FaGithub />
            </a>
            <a
              href="www.linkedin.com/in/abdul-rehman-z"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:associatewithabdulrehman@gmail.com"
              aria-label="Email Abdul Rehman"
            >
              <FaEnvelope />
            </a>
          </div>
        </motion.section>
      </div>
    </motion.div>
  );
};

export default Home;
