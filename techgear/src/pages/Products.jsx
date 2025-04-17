import React from "react";
import "./Products.css";

function Products() {
  const products = [
    {
      name: "Wireless Headphones",
      desc: "High-quality sound with noise cancellation.",
      price: "$120",
    },
    {
      name: "Smartwatch",
      desc: "Fitness tracking and notifications on your wrist.",
      price: "$180",
    },
    {
      name: "Bluetooth Speaker",
      desc: "Compact, loud, and perfect for travel.",
      price: "$90",
    },
    {
      name: "VR Headset",
      desc: "Immersive experience for gaming and media.",
      price: "$250",
    },
  ];

  return (
    <div className="products">
      <h1>Our Products</h1>
      <div className="product-list">
        {products.map((item, idx) => (
          <div key={idx} className="product-card">
            <h3>{item.name}</h3>
            <p>{item.desc}</p>
            <span>{item.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
