import React from "react";
import "./Pages.css";

const About = () => {
  return (
    <div className="page about">
      <h2>About Our Company</h2>
      <p>
        We are dedicated to providing high-quality services with a focus on
        customer satisfaction.
      </p>

      {/* Mission & Vision */}
      <div className="about-section">
        <h3>Our Mission</h3>
        <p>
          To empower businesses with innovative solutions and help them succeed.
        </p>
      </div>

      <div className="about-section">
        <h3>Our Vision</h3>
        <p>
          To be a globally recognized company known for excellence and
          integrity.
        </p>
      </div>

      {/* Meet Our Team */}
      <div className="team">
        <h2>Meet Our Team</h2>
        <div className="team-list">
          <div className="team-member">
            <h4>Jane Doe</h4>
            <p>CEO & Founder</p>
          </div>
          <div className="team-member">
            <h4>Mark Johnson</h4>
            <p>Lead Developer</p>
          </div>
          <div className="team-member">
            <h4>Emily Davis</h4>
            <p>Marketing Manager</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
