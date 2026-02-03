import React, { useState } from "react";

// A minimal mock Modal component to show how children are used
const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "rgba(0,0,0,0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: "#fff",
          padding: "20px",
          borderRadius: "8px",
          maxWidth: "400px",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h3>{title}</h3>
          <button onClick={onClose}>Close</button>
        </div>

        <div style={{ marginTop: "15px" }}>
          {children}{" "}
          {/* This renders the dynamic content passed from the parent */}
        </div>
      </div>
    </div>
  );
};

// Example 1: A component for user profiles
const UserProfile = ({ name, bio }) => (
  <div>
    <h4>{name}</h4>
    <p>{bio}</p>
  </div>
);

// Example 2: A component for settings input
const SettingsForm = () => (
  <input
    placeholder="Change settings..."
    style={{ padding: "8px", width: "100%" }}
  />
);

function DynamicModalDemo() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  // State to hold the specific component/JSX to render
  const [dynamicContent, setDynamicContent] = useState(null);

  const openModalWithContent = (title, contentComponent) => {
    setModalTitle(title);
    setDynamicContent(contentComponent);
    setIsModalOpen(true);
  };

  return (
    <div style={{ padding: "20px", display: "flex", gap: "10px" }}>
      <button
        onClick={() =>
          openModalWithContent(
            "Profile: Alice",
            <UserProfile
              name="Alice"
              bio="Software Engineer who loves React."
            />,
          )
        }
      >
        View Alice Profile
      </button>

      <button
        onClick={() => openModalWithContent("App Settings", <SettingsForm />)}
      >
        Open Settings
      </button>

      {/* The generic Modal wrapper receives the dynamic content via the 'children' prop */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={modalTitle}
      >
        {dynamicContent}
      </Modal>
    </div>
  );
}

export default DynamicModalDemo;
