import React, { useState } from "react";

function PasswordToggle() {
  const [password, setPassword] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  // Toggles the boolean state
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <input
        // Dynamically switch type between 'password' and 'text'
        type={isVisible ? "text" : "password"}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter password"
      />
      <button onClick={toggleVisibility} type="button">
        {isVisible ? "Hide" : "Show"}
      </button>
    </div>
  );
}
export default PasswordToggle;
