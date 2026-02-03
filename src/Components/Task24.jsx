import React, { useState } from "react";

const StepNavigation = () => {
  const [activeStep, setActiveStep] = useState(0);
  const steps = ["Step 1: User Info", "Step 2: Preferences", "Step 3: Review"];

  const handleNext = () => {
    // Only increment if we haven't reached the end
    if (activeStep < steps.length - 1) {
      setActiveStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    // Only decrement if we aren't at the beginning
    if (activeStep > 0) {
      setActiveStep((prev) => prev - 1);
    }
  };

  return (
    <div style={{ padding: "20px", border: "1px solid #ccc" }}>
      {/* 1. Display Content based on Step */}
      <div style={{ marginBottom: "20px", minHeight: "50px" }}>
        <h2>{steps[activeStep]}</h2>
        <p>This is the content for {steps[activeStep]}.</p>
      </div>

      {/* 2. Navigation Buttons */}
      <div style={{ display: "flex", gap: "10px" }}>
        <button onClick={handleBack} disabled={activeStep === 0}>
          Previous
        </button>

        <button onClick={handleNext} disabled={activeStep === steps.length - 1}>
          {activeStep === steps.length - 1 ? "Finish" : "Next"}
        </button>
      </div>

      {/* 3. Simple Indicator */}
      <p>
        Step {activeStep + 1} of {steps.length}
      </p>
    </div>
  );
};

export default StepNavigation;
