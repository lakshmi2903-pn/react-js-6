import React, { useState, useEffect } from "react";
import "./Task.css"; // Assuming Task.css is used for styling

const Task8Notification = ({ message, duration = 3000 }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Set a timeout to hide the banner after the specified duration (3000ms = 3 seconds)
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, duration);

    // Cleanup function to clear the timeout if the component unmounts early
    // or if the duration changes unexpectedly
    return () => clearTimeout(timer);
  }, [duration]); // Re-run effect only if duration prop changes

  if (!isVisible) return null;

  return (
    <div className="notification-banner">
      <p>{message}</p>
      <button onClick={() => setIsVisible(false)}>Dismiss</button>
    </div>
  );
};

export default Task8Notification;
