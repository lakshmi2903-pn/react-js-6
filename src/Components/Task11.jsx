import React, { useState } from "react";
import "./Task.css"; // Ensure your CSS file is imported

const Task11ResponsiveNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="navbar-container">
      <div className="logo">MyBrand</div>

      {/* The toggle button, only visible on mobile screens */}
      <button className="navbar-toggle" onClick={toggleNavbar}>
        ☰
      </button>

      {/* The navigation links container */}
      <nav className={`navbar-links ${isOpen ? "open" : ""}`}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};

export default Task11ResponsiveNav;
