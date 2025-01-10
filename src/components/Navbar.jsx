import React from "react";
import "./Navbar.css";
import data from "../data/data.json"; // Import the JSON file

function Navbar() {
  const navbarData = data.navbar; // Access the navbar section of the JSON

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <div className="logo-icon">{navbarData.brand.icon}</div>
        <span className="logo-text">{navbarData.brand.text}</span>
      </div>
      <div className="nav-links">
        {navbarData.links.map((link, index) => (
          <a key={index} href={link.href}>
            {link.text}
          </a>
        ))}
      </div>
      <a href={navbarData.button.href} className="btn-primary">
        {navbarData.button.text}
      </a>
    </nav>
  );
}

export default Navbar;
