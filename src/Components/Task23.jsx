import React, { useState } from "react";

const STEPS = ["Account", "Profile", "Payment", "Confirm"];

const StepProgress = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const next = () => {
    if (currentStep < STEPS.length) setCurrentStep(prev => prev + 1);
  };

  const prev = () => {
    if (currentStep > 1) setCurrentStep(prev => prev - 1);
  };

  return (
    <div style={{ width: "100%", maxWidth: "600px", margin: "20px auto" }}>
      {/* Progress Container */}
      <div style={{ display: "flex", justifyContent: "space-between", position: "relative", marginBottom: "30px" }}>
        
        {/* Background Line */}
        <div style={{ position: "absolute", top: "50%", left: 0, right: 0, height: "4px", backgroundColor: "#e0e0e0", transform: "translateY(-50%)", zIndex: 0 }} />
        
        {/* Active Progress Line */}
        <div style={{ 
          position: "absolute", top: "50%", left: 0, height: "4px", backgroundColor: "#3b82f6", 
          width: `${((currentStep - 1) / (STEPS.length - 1)) * 100}%`,
          transition: "0.3s ease", transform: "translateY(-50%)", zIndex: 0 
        }} />

        {/* Step Circles */}
        {STEPS.map((step, index) => {
          const stepNumber = index + 1;
          const isActive = stepNumber <= currentStep;
          return (
            <div key={step} style={{ zIndex: 1, textAlign: "center" }}>
              <div style={{
                width: "30px", height: "30px", borderRadius: "50%", backgroundColor: isActive ? "#3b82f6" : "#fff",
                border: `3px solid ${isActive ? "#3b82f6" : "#e0e0e0"}`, color: isActive ? "#fff" : "#000",
                display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold", transition: "0.3s"
              }}>
                {stepNumber}
              </div>
              <div style={{ marginTop: "8px", fontSize: "12px", color: isActive ? "#3b82f6" : "#999" }}>{step}</div>
            </div>
          );
        })}
      </div>

      {/* Controls */}
      <div style={{ display: "flex", gap: "10px" }}>
        <button onClick={prev} disabled={currentStep === 1}>Back</button>
        <button onClick={next} disabled={currentStep === STEPS.length}>
          {currentStep === STEPS.length ? "Finish" : "Next"}
        </button>
      </div>
    </div>
  );
};

export default StepProgress;
