import React from "react";
import useLocalStorage from "./Task47.jsx";

function UserSettings() {
  // Use the custom hook instead of useState
  const [userName, setUserName] = useLocalStorage("userName", "Guest");
  const [isDarkMode, setIsDarkMode] = useLocalStorage("isDarkMode", false);

  return (
    <div
      style={{
        padding: "20px",
        background: isDarkMode ? "#333" : "#fff",
        color: isDarkMode ? "#fff" : "#000",
      }}
    >
      <h3>Persisted Settings</h3>

      <div>
        <label>Name:</label>
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>

      <div style={{ marginTop: "10px" }}>
        <label>
          <input
            type="checkbox"
            checked={isDarkMode}
            onChange={(e) => setIsDarkMode(e.target.checked)}
          />
          Enable Dark Mode
        </label>
      </div>

      <p style={{ marginTop: "10px" }}>
        Hello, {userName}! Refresh the page; your settings will remain.
      </p>
    </div>
  );
}

export default UserSettings;
