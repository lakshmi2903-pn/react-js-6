import React, { useState } from "react";
import "./Task.css"; // Ensure your CSS file is imported

const Task13FocusHelper = () => {
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isUsernameFocused, setIsUsernameFocused] = useState(false);

  return (
    <div className="form-container">
      <label htmlFor="username">Username:</label>
      <input
        type="text"
        id="username"
        className="form-input"
        onFocus={() => setIsUsernameFocused(true)}
        onBlur={() => setIsUsernameFocused(false)}
        placeholder="Enter username"
      />
      {/* Conditionally render helper text */}
      {isUsernameFocused && (
        <p className="helper-text">
          Username must be at least 6 characters long.
        </p>
      )}

      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        className="form-input"
        onFocus={() => setIsEmailFocused(true)}
        onBlur={() => setIsEmailFocused(false)}
        placeholder="Enter email"
      />
      {/* Conditionally render helper text */}
      {isEmailFocused && (
        <p className="helper-text">
          Enter a valid email address format (e.g., name@domain.com).
        </p>
      )}
    </div>
  );
};

export default Task13FocusHelper;
