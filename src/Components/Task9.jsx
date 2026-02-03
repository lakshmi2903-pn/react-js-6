import React, { useState, useEffect } from "react";
import "./Task.css"; // Ensure your CSS file is imported

const Task9StickyHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the vertical scroll position is greater than 10 pixels
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Add the scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array ensures this runs only once on mount

  // Apply the 'scrolled' class name conditionally
  const headerClasses = `sticky-header ${isScrolled ? "scrolled" : ""}`;

  return (
    <header className={headerClasses}>
      <h1>My Sticky Header</h1>
      <nav>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};

export default Task9StickyHeader;
