import React from "react";
import "./Pages.css";

const Contact = () => {
  return (
    <div className="page contact">
      <h2>Contact Us</h2>
      <p>We’d love to hear from you! Reach out for any inquiries.</p>

      <div className="contact-container">
        {/* Contact Form */}
        <form className="contact-form">
          <label>Name:</label>
          <input type="text" placeholder="Your Name" required />

          <label>Email:</label>
          <input type="email" placeholder="Your Email" required />

          <label>Message:</label>
          <textarea placeholder="Your Message" required></textarea>

          <button type="submit">Send Message</button>
        </form>

        {/* Contact Info */}
        <div className="contact-info">
          <h3>Our Office</h3>
          <p>123 Main Street, Cityville</p>
          <h3>Email</h3>
          <p>info@example.com</p>
          <h3>Phone</h3>
          <p>+123 456 7890</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
