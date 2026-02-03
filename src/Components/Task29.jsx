import React, { useState } from "react";

function CartWithDiscount() {
  const [items, setItems] = useState([
    { id: 1, name: "Premium Headphones", price: 120, qty: 1 },
    { id: 2, name: "USB Cable", price: 10, qty: 1 },
  ]);

  // 1. Derived Subtotal
  const subtotal = items.reduce((acc, item) => acc + item.price * item.qty, 0);

  // 2. Define Condition (e.g., spend over $100)
  const discountThreshold = 100;
  const discountRate = 0.1; // 10%

  const discountAmount =
    subtotal > discountThreshold ? subtotal * discountRate : 0;
  const finalTotal = subtotal - discountAmount;

  return (
    <div
      style={{ padding: "20px", border: "1px solid #ddd", borderRadius: "8px" }}
    >
      <h4>Order Summary</h4>
      <p>Subtotal: ${subtotal.toFixed(2)}</p>

      {/* 3. Conditional Rendering for Discount UI */}
      {subtotal > discountThreshold ? (
        <p style={{ color: "green" }}>
          Discount (10%): -${discountAmount.toFixed(2)}
        </p>
      ) : (
        <p style={{ color: "gray", fontSize: "0.8em" }}>
          Add ${(discountThreshold - subtotal).toFixed(2)} more for 10% off!
        </p>
      )}

      <hr />
      <h3>Total: ${finalTotal.toFixed(2)}</h3>
    </div>
  );
}
export default CartWithDiscount;
