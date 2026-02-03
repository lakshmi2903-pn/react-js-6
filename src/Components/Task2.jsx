import React, { useState } from "react";

const SimpleMenu = () => {
  const [activeItem, setActiveItem] = useState("Home");

  const menuItems = ["Home", "Profile", "Settings"];

  return (
    <ul className="menu-list">
      {menuItems.map((item) => (
        <li
          key={item}
          onClick={() => setActiveItem(item)}
          className={activeItem === item ? "active" : ""}
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

export default SimpleMenu;
