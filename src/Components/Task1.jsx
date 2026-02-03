import React, { useState } from "react";
import "./Task.css";

const SidebarLayout = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="layout-container">
      <aside className={`sidebar ${isOpen ? "open" : "closed"}`}>
        <button className="toggle-btn" onClick={toggleSidebar}>
          {isOpen ? "×" : "☰"}
        </button>
        <nav className="menu-items">
          <ul>
            <li>Dashboard</li>
            <li>Profile</li>
            <li>Settings</li>
          </ul>
        </nav>
      </aside>

      <main className="main-content">
        <h1>Main Content Area</h1>
        <p>The sidebar is currently {isOpen ? "Open" : "Closed"}.</p>
      </main>
    </div>
  );
};

export default SidebarLayout;
