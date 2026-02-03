import React, { useState } from "react";

function DeleteConfirmationDemo() {
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [itemIdToDelete, setItemIdToDelete] = useState(null);

  const handleDeleteClick = (itemId) => {
    setItemIdToDelete(itemId);
    setIsConfirmOpen(true); // Open the confirmation dialog
  };

  const handleConfirmDelete = () => {
    // Perform the actual delete action here
    console.log(`Deleting item with ID: ${itemIdToDelete}`);
    alert(`Item ${itemIdToDelete} deleted!`);

    // Reset state after action
    setIsConfirmOpen(false);
    setItemIdToDelete(null);
  };

  const handleCancel = () => {
    setIsConfirmOpen(false); // Close the dialog without action
    setItemIdToDelete(null);
  };

  return (
    <div style={{ padding: "20px" }}>
      <p>Item 1 (Click the button below)</p>
      <button onClick={() => handleDeleteClick(1)} style={{ color: "red" }}>
        Delete Item 1
      </button>

      {/* Conditional Rendering of the Confirmation Dialog */}
      {isConfirmOpen && (
        <div
          style={{
            marginTop: "20px",
            padding: "15px",
            border: "1px solid #ccc",
            background: "#fff",
            borderRadius: "5px",
            zIndex: 10,
          }}
        >
          <p>
            <strong>
              Are you sure you want to delete item {itemIdToDelete}?
            </strong>{" "}
            This cannot be undone.
          </p>
          <button
            onClick={handleConfirmDelete}
            style={{ marginRight: "10px", background: "red", color: "white" }}
          >
            Confirm Delete
          </button>
          <button onClick={handleCancel}>Cancel</button>
        </div>
      )}
    </div>
  );
}

export default DeleteConfirmationDemo;
