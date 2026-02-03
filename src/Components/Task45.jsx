import React, { useState } from "react";

function LivePreviewEditor() {
  // 1. State holds the content of both the input and the preview
  const [content, setContent] = useState("Type here to see a live preview...");

  const handleInputChange = (event) => {
    // 2. Update the state immediately on every keystroke
    setContent(event.target.value);
  };

  return (
    <div style={{ display: "flex", gap: "20px" }}>
      {/* Left side: The input area */}
      <div style={{ flex: 1 }}>
        <h3>Editor</h3>
        <textarea
          value={content}
          onChange={handleInputChange}
          style={{ width: "100%", height: "200px", padding: "10px" }}
        />
      </div>

      {/* Right side: The live preview area */}
      <div
        style={{
          flex: 1,
          border: "1px solid #ccc",
          padding: "10px",
          background: "#f9f9f9",
          minHeight: "200px",
        }}
      >
        <h3>Live Preview</h3>
        {/* 3. Render the exact same state value here */}
        <p>{content}</p>
      </div>
    </div>
  );
}

export default LivePreviewEditor;
