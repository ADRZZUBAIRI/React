import React from "react";
import "./Pages.css";

const Services = () => {
  return (
    <div className="page services">
      <h2>Our Services</h2>
      <p>We offer a range of services to help businesses grow and succeed.</p>

      {/* Service Categories */}
      <div className="services-list">
        <div className="service-item">
          <h3>Web Development</h3>
          <p>
            We create stunning and responsive websites that meet your business
            needs.
          </p>
        </div>
        <div className="service-item">
          <h3>SEO & Digital Marketing</h3>
          <p>Boost your online presence and improve search engine rankings.</p>
        </div>
        <div className="service-item">
          <h3>Mobile App Development</h3>
          <p>
            We build high-performance mobile applications for Android and iOS.
          </p>
        </div>
        <div className="service-item">
          <h3>Graphic Design</h3>
          <p>
            Professional logos, branding, and graphics that enhance your brand
            identity.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
