import React from "react";
import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="left-section">
        <h1>
          Welcome<br></br>Back!
        </h1>
        <p>To keep connected with us please login with your personal info</p>
        <button className="sign-in-button">Sign In</button>
      </div>
      <div className="right-section">
        <h1>
          Create Account
        </h1>
        <div className="social-icons">
          <i className="icon">🌐</i>
          <i className="icon">📘</i>
          <i className="icon">🐦</i>
        </div>
        <p>or use your email for registration</p>
        <form>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button type="submit" className="sign-up-button">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
