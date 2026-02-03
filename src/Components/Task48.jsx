import React from "react";
import useLocalStorage from "./Task47.jsx";

function PersistentCounter() {
  // The initial value of 'count' is retrieved from localStorage on page load
  const [count, setCount] = useLocalStorage("appCounter", 0);

  return (
    <div style={{ padding: "20px" }}>
      <h3>Persistent Counter</h3>
      <p>
        Current Count: <strong>{count}</strong>
      </p>
      <button onClick={() => setCount((prev) => prev + 1)}>
        Increment Count
      </button>
      <button onClick={() => setCount(0)} style={{ marginLeft: "10px" }}>
        Reset
      </button>
      <p style={{ marginTop: "15px" }}>
        Type a number above, refresh your browser tab, and the number will
        remain.
      </p>
    </div>
  );
}

export default PersistentCounter;
