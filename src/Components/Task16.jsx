import React, { useState } from "react";

const options = ["Apple", "Banana", "Cherry", "Date"];

function MultiSelect() {
  const [selected, setSelected] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const toggleOption = (option) => {
    // If already selected, remove it; otherwise, add it.
    setSelected((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option],
    );
  };

  return (
    <div style={{ width: "200px", position: "relative" }}>
      <div
        onClick={() => setIsOpen(!isOpen)}
        style={{ border: "1px solid #ccc", padding: "8px", cursor: "pointer" }}
      >
        {selected.length > 0 ? selected.join(", ") : "Select Fruits"}
      </div>

      {isOpen && (
        <div
          style={{
            border: "1px solid #ccc",
            position: "absolute",
            width: "100%",
            background: "#fff",
            zIndex: 1,
          }}
        >
          {options.map((option) => (
            <div
              key={option}
              onClick={() => toggleOption(option)}
              style={{
                padding: "8px",
                cursor: "pointer",
                backgroundColor: selected.includes(option) ? "#e0e0e0" : "#fff",
              }}
            >
              <input
                type="checkbox"
                checked={selected.includes(option)}
                readOnly
              />{" "}
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MultiSelect;
