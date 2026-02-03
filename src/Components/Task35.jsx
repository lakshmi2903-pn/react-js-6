import React from "react";

const ALERT_STYLES = {
  success: { bg: "#d4edda", color: "#155724", border: "#c3e6cb", icon: "✅" },
  error: { bg: "#f8d7da", color: "#721c24", border: "#f5c6cb", icon: "❌" },
  warning: { bg: "#fff3cd", color: "#856404", border: "#ffeeba", icon: "⚠️" },
  info: { bg: "#d1ecf1", color: "#0c5460", border: "#bee5eb", icon: "ℹ️" },
};

const StatusAlert = ({ variant = "info", title, message, onClose }) => {
  const style = ALERT_STYLES[variant] || ALERT_STYLES.info;

  return (
    <div
      role="alert"
      aria-live="polite"
      style={{
        backgroundColor: style.bg,
        color: style.color,
        border: `1px solid ${style.border}`,
        padding: "1rem",
        borderRadius: "4px",
        display: "flex",
        alignItems: "start",
        marginBottom: "1rem",
        position: "relative",
      }}
    >
      <span style={{ marginRight: "10px", fontSize: "1.2rem" }}>
        {style.icon}
      </span>
      <div style={{ flex: 1 }}>
        {title && (
          <strong style={{ display: "block", marginBottom: "4px" }}>
            {title}
          </strong>
        )}
        <p style={{ margin: 0, fontSize: "0.9rem" }}>{message}</p>
      </div>
      {onClose && (
        <button
          onClick={onClose}
          aria-label="Close alert"
          style={{
            background: "none",
            border: "none",
            color: "inherit",
            cursor: "pointer",
            fontSize: "1.2rem",
            lineHeight: 1,
            padding: "0 5px",
          }}
        >
          &times;
        </button>
      )}
    </div>
  );
};

export default StatusAlert;
