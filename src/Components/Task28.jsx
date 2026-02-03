import React, { useState } from "react";

const INITIAL_ITEMS = [
  { id: 1, name: "Laptop", price: 999, qty: 1 },
  { id: 2, name: "Mouse", price: 25, qty: 2 },
  { id: 3, name: "Keyboard", price: 50, qty: 1 },
];

function CartWithRemoval() {
  const [items, setItems] = useState(INITIAL_ITEMS);

  // 1. Remove item logic
  const removeItem = (id) => {
    // Keep only the items that don't match the clicked ID
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // 2. Total is automatically derived from the current 'items' state
  const total = items.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <div style={{ padding: "20px", maxWidth: "300px" }}>
      <h4>Your Cart ({items.length} items)</h4>
      {items.map((item) => (
        <div
          key={item.id}
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "8px",
          }}
        >
          <span>{item.name}</span>
          {/* 3. Remove button triggers the filter function */}
          <button onClick={() => removeItem(item.id)} style={{ color: "red" }}>
            ×
          </button>
        </div>
      ))}
      <hr />
      <h3>Total: ${total.toFixed(2)}</h3>

      {/* Show message if cart is empty */}
      {items.length === 0 && <p>Your cart is empty!</p>}
    </div>
  );
}
export default CartWithRemoval;
