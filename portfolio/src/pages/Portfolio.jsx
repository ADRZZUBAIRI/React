import React, { useEffect } from "react";
import { motion } from "framer-motion";
import "./Portfolio.css";

const projects = [
  {
    title: "My VA Gurus",
    description: "A complete website for a virtual assistant service.",
    image: "/assets/images/myvagurus.png",
    link: "https://myvagurus.com",
  },
  {
    title: "Ramp It Us",
    description: "Accessible solutions for any mobility needs.",
    image: "/assets/images/rampitus.png",
    link: "https://rampitus.com",
  },
  {
    title: "Insta Sell Home",
    description: "Real estate website for any type of quick home sales.",
    image: "/assets/images/instasellhome.png",
    link: "https://instasellhome.com",
  },
  {
    title: "PRSRCM",
    description: "A modern website for PRSRCM, The Best Medical Billers.",
    image: "/assets/images/prsrcm.png",
    link: "https://prsrcm.com",
  },
  {
    title: "JICC",
    description: "Educational website for JICC. A prestijous institution.",
    image: "/assets/images/jicc.png",
    link: "https://jicc.edu.pk",
  },
];

const Portfolio = () => {
  useEffect(() => {
    const updateOverlayHeights = () => {
      const imageWrappers = document.querySelectorAll(
        ".project-card .image-wrapper"
      );
      imageWrappers.forEach((wrapper) => {
        const overlay = wrapper.parentElement.querySelector("a::before");
        if (overlay) {
          overlay.style.height = wrapper.offsetHeight + "px";
        }
      });
    };

    // Run on initial load and window resize
    updateOverlayHeights();
    window.addEventListener("resize", updateOverlayHeights);

    // Run after images load (if needed)
    window.addEventListener("load", updateOverlayHeights);

    return () => {
      window.removeEventListener("resize", updateOverlayHeights);
      window.removeEventListener("load", updateOverlayHeights);
    };
  }, []);

  return (
    <motion.section
      className="portfolio"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h2>My Projects</h2>
      <div className="projects">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <div className="image-wrapper">
                <img src={project.image} alt={project.title} />
              </div>
              <h3>{project.title}</h3>
            </a>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Portfolio;
