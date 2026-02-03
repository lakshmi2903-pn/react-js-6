import React from "react";

// Map variants to specific colors and icons
const variantConfig = {
  success: {
    color: "#155724", // Dark green text
    background: "#d4edda", // Light green background
    icon: "✅ Success",
  },
  error: {
    color: "#721c24", // Dark red text
    background: "#f8d7da", // Light red background
    icon: "❌ Error",
  },
  warning: {
    color: "#856404", // Dark yellow text
    background: "#fff3cd", // Light yellow background
    icon: "⚠️ Warning",
  },
};

const AlertComponent = ({ variant, message }) => {
  // Select the configuration based on the variant prop
  const config = variantConfig[variant] || variantConfig.warning;

  return (
    <div
      style={{
        padding: "12px 20px",
        borderRadius: "5px",
        border: `1px solid ${config.color}`,
        backgroundColor: config.background,
        color: config.color,
        marginBottom: "10px",
      }}
    >
      <strong>{config.icon}:</strong> {message}
    </div>
  );
};
export default AlertComponent;
