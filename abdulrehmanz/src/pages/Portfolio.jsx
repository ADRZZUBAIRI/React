// src/pages/Portfolio.jsx
import React from "react";

const Portfolio = () => {
  const projects = [
    {
      title: "Project 1",
      description: "Description 1",
      image: "/path/to/image1.jpg",
    },
    {
      title: "Project 2",
      description: "Description 2",
      image: "/path/to/image2.jpg",
    },
    // Add more projects here
  ];

  return (
    <div className="portfolio">
      <h2>My Projects</h2>
      <div className="projects">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
