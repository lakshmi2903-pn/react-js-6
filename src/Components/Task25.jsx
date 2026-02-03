import React, { useState } from "react";

const ValidatedSteps = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isAgreed, setIsAgreed] = useState(false); // Our condition

  const handleNext = () => {
    // 1. Check condition before updating state
    if (!isAgreed) {
      alert("Please agree to terms before proceeding!");
      return;
    }

    if (currentStep < 3) setCurrentStep((prev) => prev + 1);
  };

  return (
    <div>
      <h3>Step {currentStep}</h3>

      {currentStep === 1 && (
        <div>
          <label>
            <input
              type="checkbox"
              checked={isAgreed}
              onChange={(e) => setIsAgreed(e.target.checked)}
            />
            I agree to the terms
          </label>
        </div>
      )}

      <div style={{ marginTop: "20px" }}>
        <button
          onClick={() => setCurrentStep((prev) => prev - 1)}
          disabled={currentStep === 1}
        >
          Back
        </button>

        {/* 2. Optional: Visually disable the button based on the condition */}
        <button onClick={handleNext} disabled={currentStep === 1 && !isAgreed}>
          Next
        </button>
      </div>
    </div>
  );
};
export default ValidatedSteps;
