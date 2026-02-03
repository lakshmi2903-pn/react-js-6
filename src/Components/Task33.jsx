import React, { useState } from "react";

const FormInput = ({
  label,
  type = "text",
  name,
  value,
  onChange,
  placeholder,
  error,
}) => {
  const [touched, setTouched] = useState(false);

  // Show error only after the user has interacted with the field
  const showError = touched && error;

  return (
    <div className="input-container">
      {label && <label htmlFor={name}>{label}</label>}
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={() => setTouched(true)} // Mark as touched when user leaves the field
        className={showError ? "input-error" : ""}
        aria-invalid={!!showError}
      />
      {showError && <span className="error-message">{error}</span>}
    </div>
  );
};

export default FormInput;
