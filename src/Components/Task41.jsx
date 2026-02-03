import React, { useState } from "react";

// Data mapping the primary field options to the dependent field options
const carData = {
  Toyota: ["Corolla", "Camry", "RAV4"],
  Honda: ["Civic", "Accord", "CR-V"],
  Ford: ["F-150", "Explorer", "Focus"],
};

function DependentForm() {
  const [carMake, setCarMake] = useState("");
  const [carModel, setCarModel] = useState("");

  const handleMakeChange = (event) => {
    const newMake = event.target.value;
    setCarMake(newMake);
    // CRITICAL: Reset the dependent field when the primary field changes
    setCarModel("");
  };

  const availableModels = carData[carMake] || [];

  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "15px",
        maxWidth: "300px",
      }}
    >
      <div>
        <label>Choose a Make:</label>
        <select value={carMake} onChange={handleMakeChange}>
          <option value="">-- Select Car Make --</option>
          {Object.keys(carData).map((make) => (
            <option key={make} value={make}>
              {make}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label>Choose a Model:</label>
        <select
          value={carModel}
          onChange={(e) => setCarModel(e.target.value)}
          // Optional: Disable model selection until a make is chosen
          disabled={!carMake}
        >
          <option value="">-- Select Car Model --</option>
          {availableModels.map((model) => (
            <option key={model} value={model}>
              {model}
            </option>
          ))}
        </select>
      </div>

      <p>
        Selected: {carMake} {carModel}
      </p>
    </form>
  );
}

export default DependentForm;
