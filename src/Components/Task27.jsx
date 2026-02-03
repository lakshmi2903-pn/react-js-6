import React, { useState } from "react";

const INITIAL_ITEMS = [
  { id: 1, name: "Product A", price: 10, qty: 1 },
  { id: 2, name: "Product B", price: 15, qty: 1 },
];

function ShoppingCart() {
  const [items, setItems] = useState(INITIAL_ITEMS);

  // 1. Function to update quantity
  const updateQty = (id, delta) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, qty: Math.max(0, item.qty + delta) } // Prevent negative qty
          : item,
      ),
    );
  };

  // 2. Calculations (Derived State)
  const subtotal = items.reduce((acc, item) => acc + item.price * item.qty, 0);
  const tax = subtotal * 0.1; // 10% tax
  const total = subtotal + tax;

  return (
    <div style={{ padding: "20px", border: "1px solid #ddd" }}>
      {items.map((item) => (
        <div
          key={item.id}
          style={{ display: "flex", gap: "10px", marginBottom: "10px" }}
        >
          <span>
            {item.name} (${item.price})
          </span>
          <button onClick={() => updateQty(item.id, -1)}>-</button>
          <span>{item.qty}</span>
          <button onClick={() => updateQty(item.id, 1)}>+</button>
        </div>
      ))}
      <hr />
      <p>Subtotal: ${subtotal.toFixed(2)}</p>
      <p>Tax: ${tax.toFixed(2)}</p>
      <h3>Total: ${total.toFixed(2)}</h3>
    </div>
  );
}
export default ShoppingCart;
