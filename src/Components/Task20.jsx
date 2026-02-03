import React, { useState, useMemo } from "react";

const DATA = ["Apple", "Banana", "Blueberry", "Cherry", "Date"];

function FilterWithCount() {
  const [query, setQuery] = useState("");

  // 1. Derive the filtered list
  const filteredData = useMemo(() => {
    return DATA.filter((item) =>
      item.toLowerCase().includes(query.toLowerCase()),
    );
  }, [query]);

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Filter items..."
      />

      {/* 2. Display the count using .length */}
      <p style={{ fontWeight: "bold" }}>
        Showing {filteredData.length} of {DATA.length} items
      </p>

      {/* Optional: Show a message if no results found */}
      {filteredData.length === 0 && <p>No results found.</p>}

      <ul>
        {filteredData.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
export default FilterWithCount;
