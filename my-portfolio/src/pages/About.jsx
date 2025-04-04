// src/pages/About.jsx
import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      className="about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h2>About Me</h2>
      <p>
        I am a highly skilled WordPress Developer with over two years of
        experience. I specialize in creating dynamic, user-friendly websites
        that drive results. My expertise spans WordPress development, design,
        and optimization.
      </p>
      <h3>Experience</h3>
      <p>
        <strong>Freelancing / WordPress Developer</strong> (July 2023 - Present,
        Lahore): Developed full-fledged working websites including user
        authentication, modern responsive designs, and custom graphics.
      </p>
      <p>
        <strong>Spectra PetroChemicals PVT LTD / Accountant</strong> (January
        2023 - July 2023, Lahore): Managed financial ledgers, reconciled bank
        statements, and implemented internal controls.
      </p>
      <h3>Education</h3>
      <p>
        <strong>Virtual University of Pakistan</strong> – BsCS (August 2022 -
        Present, Lahore)
        <br />
        <strong>Gov. Islamia College</strong> – Intermediate (July 2020 - June
        2022, Lahore)
      </p>
      <h3>Skills</h3>
      <p>WordPress, HTML, CSS, JavaScript, SEO, SQL, Google Ads</p>
      <h3>Certificate Courses</h3>
      <p>
        Build a Full Website using WordPress (Coursera) | Build a Free Website
        using WordPress (Coursera) | Run Search Ad in Google Ads & Easy SEO For
        Beginners (Udemy)
      </p>
    </motion.section>
  );
};

export default About;
