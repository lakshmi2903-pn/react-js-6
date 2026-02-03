import React, { useState } from "react";
import "./Task.css";

// Helper function to calculate password strength (simple logic)
const calculateStrength = (password) => {
  let score = 0;
  if (!password) return 0;

  // Criteria: length, uppercase, lowercase, numbers, symbols
  if (password.length > 7) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[a-z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;

  return (score / 5) * 100; // Return percentage
};

const Task14PasswordStrength = () => {
  const [password, setPassword] = useState("");
  const strength = calculateStrength(password);

  const getStrengthColor = () => {
    if (strength < 20) return "none"; // Hide if empty
    if (strength <= 40) return "red";
    if (strength <= 80) return "orange";
    return "green";
  };

  const strengthText = () => {
    if (strength === 0) return "";
    if (strength <= 40) return "Weak";
    if (strength <= 80) return "Moderate";
    return "Strong";
  };

  return (
    <div className="form-container">
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        className="form-input"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter your password"
      />

      <div className="strength-indicator">
        <div
          className="strength-bar"
          style={{
            width: `${strength}%`,
            backgroundColor: getStrengthColor(),
          }}
        />
      </div>
      <p className="strength-text" style={{ color: getStrengthColor() }}>
        {strengthText()}
      </p>
    </div>
  );
};

export default Task14PasswordStrength;
