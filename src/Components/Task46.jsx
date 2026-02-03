import React, { useState } from "react";

function SyncedInputs() {
  // A single state variable is the 'source of truth' for both inputs
  const [sharedValue, setSharedValue] = useState("");

  const handleInputChange = (event) => {
    // This handler updates the shared state whenever either input changes
    setSharedValue(event.target.value);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "15px",
        maxWidth: "300px",
      }}
    >
      <div>
        <label>Input Field 1:</label>
        <input
          type="text"
          // Both inputs use the same 'value' prop from the state
          value={sharedValue}
          // Both inputs use the same 'onChange' handler
          onChange={handleInputChange}
          style={{ width: "100%" }}
        />
      </div>

      <div>
        <label>Input Field 2 (Synced):</label>
        <input
          type="text"
          value={sharedValue}
          onChange={handleInputChange}
          style={{ width: "100%" }}
        />
      </div>

      <p>
        Current Shared Value: <strong>{sharedValue}</strong>
      </p>
    </div>
  );
}

export default SyncedInputs;
