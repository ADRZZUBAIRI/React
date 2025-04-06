// src/pages/Contact.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Contact.css"; // Assuming you have a CSS file for styling

const Contact = () => {
  const [formData, setFormData] = useState({ email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can integrate with Formspree, EmailJS, etc. here
    console.log(formData);
    alert("Message sent!");
    setFormData({ email: "", message: "" });
  };

  return (
    <motion.section
      className="contact"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your email address"
          required
        />
        <label>Message:</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your message"
          rows="5"
          required
        ></textarea>
        <button type="submit">Send Message</button>
      </form>
    </motion.section>
  );
};

export default Contact;
