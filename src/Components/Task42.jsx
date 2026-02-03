import React, { useState, useEffect } from "react";

function ValidatedForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // The crucial state: Tracks the overall form validity
  const [isFormValid, setIsFormValid] = useState(false);

  // Validation logic
  const isEmailValid = email.includes("@") && email.includes(".");
  const isPasswordValid = password.length >= 6;

  // Use useEffect to check overall validity whenever inputs change
  useEffect(() => {
    setIsFormValid(isEmailValid && isPasswordValid);
  }, [email, password]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isFormValid) {
      alert("Form submitted successfully!");
      // Proceed with API call or data submission
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        maxWidth: "300px",
      }}
    >
      <div>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {!isEmailValid && email.length > 0 && (
          <span style={{ color: "red" }}>Invalid email</span>
        )}
      </div>

      <div>
        <input
          type="password"
          placeholder="Password (min 6 chars)"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {!isPasswordValid && password.length > 0 && (
          <span style={{ color: "red" }}>Password too short</span>
        )}
      </div>

      {/* The submit button is conditionally disabled */}
      <button type="submit" disabled={!isFormValid}>
        Submit
      </button>
    </form>
  );
}

export default ValidatedForm;
