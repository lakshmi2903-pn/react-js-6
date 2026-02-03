import React, { useState } from "react";

const DATA = Array.from({ length: 25 }, (_, i) => `Item ${i + 1}`);

const Task22 = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Calculate limits
  const totalPages = Math.ceil(DATA.length / itemsPerPage);
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  // Calculate data slice
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = DATA.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div
      style={{ padding: "10px", border: "1px solid #ddd", borderRadius: "8px" }}
    >
      <h4>Paginated List</h4>
      <ul>
        {currentItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <div
        className="pagination-controls"
        style={{ display: "flex", gap: "10px", alignItems: "center" }}
      >
        {/* Disable if on the first page */}
        <button
          onClick={() => setCurrentPage((prev) => prev - 1)}
          disabled={isFirstPage}
          style={{
            cursor: isFirstPage ? "not-allowed" : "pointer",
            opacity: isFirstPage ? 0.5 : 1,
          }}
        >
          Previous
        </button>

        <span>
          Page <strong>{currentPage}</strong> of {totalPages}
        </span>

        {/* Disable if on the last page */}
        <button
          onClick={() => setCurrentPage((prev) => prev + 1)}
          disabled={isLastPage}
          style={{
            cursor: isLastPage ? "not-allowed" : "pointer",
            opacity: isLastPage ? 0.5 : 1,
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Task22;
