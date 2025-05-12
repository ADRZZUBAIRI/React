import React from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

function Signup() {
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    navigate("/login");
  };

  return (
    <div className="auth-container">
      <h2>Create an Account</h2>
      <form className="auth-form" onSubmit={handleSignup}>
        <input type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Sign Up</button>
        <p>
          Already have an account? <a href="/login">Log in</a>
        </p>
      </form>
    </div>
  );
}

export default Signup;
