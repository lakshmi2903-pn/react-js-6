import React, { useState } from "react";

const DATA = Array.from({ length: 25 }, (_, i) => `Item ${i + 1}`);

function Pagination() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // 1. Calculate indices
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  // 2. Slice the data for the current view
  const currentItems = DATA.slice(indexOfFirstItem, indexOfLastItem);

  // 3. Determine total pages
  const totalPages = Math.ceil(DATA.length / itemsPerPage);

  return (
    <div>
      <ul>
        {currentItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      {/* 4. Navigation Controls */}
      <div>
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prev) => prev - 1)}
        >
          Previous
        </button>

        <span>
          {" "}
          Page {currentPage} of {totalPages}{" "}
        </span>

        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((prev) => prev + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}
export default Pagination;
