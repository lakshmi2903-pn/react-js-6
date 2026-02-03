import React, { useState, useCallback, useEffect } from "react";

// Custom hook to manage the list state with an undo history
const useUndoList = (initialData) => {
  const [list, setList] = useState(initialData);
  const [lastDeletedItem, setLastDeletedItem] = useState(null);
  const UNDO_TIMEOUT = 5000; // 5 seconds

  const deleteItem = useCallback(
    (id) => {
      const itemToDelete = list.find((item) => item.id === id);
      if (!itemToDelete) return;

      setLastDeletedItem(itemToDelete);
      setList((prevList) => prevList.filter((item) => item.id !== id));
    },
    [list],
  );

  const undoDelete = useCallback(() => {
    if (!lastDeletedItem) return;

    // Add the item back to the list
    setList((prevList) => [...prevList, lastDeletedItem]);
    setLastDeletedItem(null); // Clear the undo notification
  }, [lastDeletedItem]);

  // Auto-clear the notification after a timeout
  useEffect(() => {
    if (!lastDeletedItem) return;

    const timer = setTimeout(() => {
      setLastDeletedItem(null);
    }, UNDO_TIMEOUT);

    return () => clearTimeout(timer);
  }, [lastDeletedItem]);

  return { list, deleteItem, undoDelete, lastDeletedItem };
};

// --- Example Component Using the Hook ---

const INITIAL_ITEMS = [
  { id: 1, name: "Apple" },
  { id: 2, name: "Banana" },
  { id: 3, name: "Cherry" },
];

function UndoDeleteDemo() {
  const { list, deleteItem, undoDelete, lastDeletedItem } =
    useUndoList(INITIAL_ITEMS);

  return (
    <div style={{ padding: "20px" }}>
      <ul>
        {list.map((item) => (
          <li key={item.id}>
            {item.name}{" "}
            <button
              onClick={() => deleteItem(item.id)}
              style={{ color: "red", marginLeft: "10px" }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      {/* Conditional Rendering for the Undo Notification */}
      {lastDeletedItem && (
        <div
          style={{
            marginTop: "20px",
            padding: "10px",
            background: "#f0f0f0",
            border: "1px solid #ccc",
          }}
        >
          <span>Item "{lastDeletedItem.name}" deleted.</span>
          <button onClick={undoDelete} style={{ marginLeft: "10px" }}>
            Undo
          </button>
        </div>
      )}
    </div>
  );
}

export default UndoDeleteDemo;
