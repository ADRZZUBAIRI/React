import "./navbar.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="nav-container">
      <div className="container">
        <Link to="/" className="logo-button">
          Logo
        </Link>

        {/* Desktop Navbar */}
        <div className="nav-links">
          <Link to="/" className="nav-button">
            Home
          </Link>
          <Link to="/about" className="nav-button">
            About
          </Link>
          <Link to="/services" className="nav-button">
            Services
          </Link>
          <Link to="/contact" className="nav-button">
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button - Hidden on Large Screens */}
        <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu - Only shown when `isOpen` is true */}
      {isOpen && (
        <div className="mobile-menu">
          <Link
            to="/"
            className="mobile-nav-button"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="mobile-nav-button"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            to="/services"
            className="mobile-nav-button"
            onClick={() => setIsOpen(false)}
          >
            Services
          </Link>
          <Link
            to="/contact"
            className="mobile-nav-button"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
