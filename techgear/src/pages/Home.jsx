import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <h1>
            Welcome to <span>TechGear</span>
          </h1>
          <p>Your hub for smart and powerful tech gear.</p>
          <button className="btn">Shop Now</button>
        </div>
        <div className="hero-img">
          <img src="./assets/tech-hero.jpg" alt="Tech showcase" />
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="products">
        <h2>Top Picks</h2>
        <div className="product-grid">
          <div className="product-card">
            <h3>Wireless Headphones</h3>
            <p>Noise cancellation and crystal-clear sound.</p>
          </div>
          <div className="product-card">
            <h3>Smartwatch</h3>
            <p>Stay fit and connected on the go.</p>
          </div>
          <div className="product-card">
            <h3>Bluetooth Speaker</h3>
            <p>Room-filling sound with compact design.</p>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="features">
        <h2>Why Choose TechGear?</h2>
        <div className="features-grid">
          <div className="feature">
            <h4>🚀 Sleek & Modern</h4>
            <p>Designed with style and function in mind.</p>
          </div>
          <div className="feature">
            <h4>✅ Quality Assured</h4>
            <p>Built to last, rigorously tested.</p>
          </div>
          <div className="feature">
            <h4>⚡ Fast Delivery</h4>
            <p>Get your gear in no time.</p>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials">
        <h2>What Customers Say</h2>
        <div className="testimonial-cards">
          <div className="testimonial">
            <p>"Best tech store I've ever used!"</p>
            <span>- Aisha M.</span>
          </div>
          <div className="testimonial">
            <p>"Amazing quality, super fast delivery."</p>
            <span>- Omar R.</span>
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="newsletter">
        <h2>Stay Updated</h2>
        <p>Sign up to get the latest news and exclusive offers.</p>
        <form className="newsletter-form">
          <input type="email" placeholder="Your email" />
          <button className="btn">Subscribe</button>
        </form>
      </section>
    </div>
  );
}

export default Home;
