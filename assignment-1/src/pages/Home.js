import React from "react";
import "./Pages.css";

const Home = () => {
  return (
    <div className="page home">
      {/* Hero Section */}
      <div className="hero">
        <h1>Welcome to Our Website</h1>
        <p>Providing top-quality services to help your business grow.</p>
        <button className="hero-btn">Get Started</button>
      </div>

      {/* Features Section */}
      <div className="features">
        <h2>Why Choose Us?</h2>
        <div className="feature-list">
          <div className="feature-item">
            <h3>Expert Team</h3>
            <p>
              We have a team of skilled professionals to provide the best
              solutions.
            </p>
          </div>
          <div className="feature-item">
            <h3>Fast & Reliable</h3>
            <p>We ensure timely delivery and maintain high reliability.</p>
          </div>
          <div className="feature-item">
            <h3>Customer Support</h3>
            <p>24/7 support to assist you with your needs.</p>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="testimonials">
        <h2>What Our Clients Say</h2>
        <div className="testimonial-list">
          <div className="testimonial">
            <p>"Excellent service! My website looks amazing."</p>
            <h4>- John Doe</h4>
          </div>
          <div className="testimonial">
            <p>"Very professional team and timely delivery."</p>
            <h4>- Sarah Smith</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
