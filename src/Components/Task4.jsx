import React, { useState } from "react";

const Tooltip = ({ text, children }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    // The main container wrapper manages the visibility events
    <div
      className="tooltip-container"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {/* 'children' is the element you are hovering over (e.g., a button or icon) */}
      {children}

      {/* Conditionally render the tooltip bubble if isVisible is true */}
      {isVisible && <div className="tooltip-bubble">{text}</div>}
    </div>
  );
};
export default Tooltip;
