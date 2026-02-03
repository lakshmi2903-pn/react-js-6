import React, { useState } from "react";

const ValidatedInput = ({
  label,
  name,
  value,
  onChange,
  validationRules,
  placeholder,
  type = "text",
}) => {
  const [error, setError] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const handleValidation = (val) => {
    if (validationRules) {
      const errorMessage = validationRules(val);
      setError(errorMessage || "");
    }
  };

  const handleChange = (e) => {
    const val = e.target.value;
    onChange(e); // Pass event to parent state
    if (isTouched) handleValidation(val); // Re-validate if user already touched it
  };

  const handleBlur = () => {
    setIsTouched(true);
    handleValidation(value);
  };

  const inputStyle = {
    padding: "10px",
    width: "100%",
    borderRadius: "4px",
    border: `1px solid ${isTouched && error ? "#ff4d4d" : "#ccc"}`,
    outline: "none",
    fontSize: "1rem",
    boxSizing: "border-box",
  };

  return (
    <div style={{ marginBottom: "1.5rem", textAlign: "left" }}>
      {label && (
        <label
          htmlFor={name}
          style={{ display: "block", marginBottom: "5px", fontWeight: "600" }}
        >
          {label}
        </label>
      )}

      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder={placeholder}
        style={inputStyle}
        aria-invalid={!!error}
      />

      {/* Inline Error Message */}
      {isTouched && error && (
        <span
          style={{
            color: "#ff4d4d",
            fontSize: "0.85rem",
            marginTop: "5px",
            display: "block",
          }}
        >
          {error}
        </span>
      )}
    </div>
  );
};

export default ValidatedInput;
