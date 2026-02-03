import React from "react";
import "./Task.css"; // Ensure your CSS file is imported

const Task12Form = () => {
  return (
    <div className="form-container">
      <label htmlFor="username">Username:</label>
      <input
        type="text"
        id="username"
        className="form-input"
        placeholder="Enter username"
      />

      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        className="form-input"
        placeholder="Enter email"
      />

      <label htmlFor="message">Message:</label>
      <textarea
        id="message"
        className="form-input"
        placeholder="Enter message"
      ></textarea>
    </div>
  );
};

export default Task12Form;
