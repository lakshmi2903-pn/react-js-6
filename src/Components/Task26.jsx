import React, { useState } from "react";

const INITIAL_ITEMS = [
  { id: 1, name: "Product A", price: 10, quantity: 2 },
  { id: 2, name: "Product B", price: 15, quantity: 1 },
];

function OrderSummary() {
  const [items] = useState(INITIAL_ITEMS);

  // 1. Calculate Subtotal: iterates through items and sums (price * quantity)
  const subtotal = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  // 2. Define extra costs
  const taxRate = 0.08; // 8%
  const shipping = 5.0;

  // 3. Calculate Total
  const taxAmount = subtotal * taxRate;
  const total = subtotal + taxAmount + shipping;

  return (
    <div style={{ border: "1px solid #ccc", padding: "15px", width: "250px" }}>
      <h4>Order Summary</h4>
      <p>Subtotal: ${subtotal.toFixed(2)}</p>
      <p>Tax (8%): ${taxAmount.toFixed(2)}</p>
      <p>Shipping: ${shipping.toFixed(2)}</p>
      <hr />
      <p>
        <strong>Total: ${total.toFixed(2)}</strong>
      </p>
    </div>
  );
}
export default OrderSummary;
