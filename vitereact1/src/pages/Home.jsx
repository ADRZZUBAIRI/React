import React from "react";
import "../css/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="animated-bg"></div>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="glass hero-glass">
          <h1>Hi, I'm Abdul Rehman</h1>
          <p>
            I help businesses bring their websites to life with clean, modern
            design & development.
          </p>
          <button>Let's Work Together</button>
        </div>
      </section>

      <section className="about-home" id="about-home">
        <h2>About Me</h2>
        <p>
          I'm a passionate and detail-oriented frontend developer with a strong
          focus on creating visually appealing, accessible, and user-friendly
          websites. With experience in building modern React-based interfaces
          and an eye for clean UI design, I specialize in crafting digital
          experiences that are both functional and aesthetic.
        </p>
        <p>
          I’ve worked on multiple projects ranging from landing pages and
          portfolios to fully dynamic business websites. I enjoy turning complex
          problems into simple, beautiful designs using plain CSS and intuitive
          layouts — including this fully glassmorphic website you're viewing!
        </p>
        <p>
          Whether you’re a startup, agency, or an individual with a creative
          idea, I can help bring it to life with performance-focused code and a
          consistent, modern design.
        </p>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2>My Services</h2>
        <div className="services-cards">
          <div className="glass-card">
            <h3>Website Design</h3>
            <p>Modern, responsive designs tailored to your brand.</p>
          </div>
          <div className="glass-card">
            <h3>WordPress Development</h3>
            <p>Custom and dynamic WordPress sites for any business.</p>
          </div>
          <div className="glass-card">
            <h3>Frontend in React</h3>
            <p>Interactive UI and smooth functionality using React.</p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects-section">
        <h2>Featured Projects</h2>
        <div className="projects-cards">
          <div className="glass-card">
            <h3>Rampitus</h3>
            <p>Accessibility-focused ramp solutions website.</p>
          </div>
          <div className="glass-card">
            <h3>My VA Gurus</h3>
            <p>Virtual assistant services built for businesses.</p>
          </div>
          <div className="glass-card">
            <h3>11 Values</h3>
            <p>Modern values-based website with clean animations.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <h2>Testimonials</h2>
        <div className="testimonials-cards">
          <div className="glass-card">
            <p>
              "Abdul delivered exactly what I wanted – professional, fast, and
              top-notch."
            </p>
            <span>- John D.</span>
          </div>
          <div className="glass-card">
            <p>
              "Great communication and a fantastic-looking website. Highly
              recommended!"
            </p>
            <span>- Sarah A.</span>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="glass cta-glass">
          <h2>Ready to build something amazing?</h2>
          <button>Contact Me</button>
        </div>
      </section>
    </div>
  );
}

export default Home;
