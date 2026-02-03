import React, { useState, useEffect } from "react";
const Task10BackToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show the button if the user scrolls past 200 pixels
      if (window.scrollY > 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling animation
    });
  };

  if (!showButton) return null; // Don't render anything if the button shouldn't show

  return (
    <button className="back-to-top-btn" onClick={scrollToTop}>
      Top
    </button>
  );
};

export default Task10BackToTop;
