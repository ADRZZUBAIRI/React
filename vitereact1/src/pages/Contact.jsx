// src/pages/Contact.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import "../css/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Message sent!");
    setFormData({
      name: "",
      email: "",
      subject: "",
      phone: "",
      message: "",
    });
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
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your full name"
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your email address"
          required
        />

        <label htmlFor="subject">Subject:</label>
        <input
          id="subject"
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="Reason for contacting"
          required
        />

        <label htmlFor="phone">Phone (optional):</label>
        <input
          id="phone"
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Your phone number"
        />

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
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
