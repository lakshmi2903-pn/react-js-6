import React, { useState, useEffect, useMemo } from "react";
import { useDebounce } from "./Task18.jsx";

const ITEMS = ["Apple", "Banana", "Blueberry", "Cherry", "Date"];

function SearchList() {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedTerm = useDebounce(searchTerm, 500);

  // Filter logic runs only when debouncedTerm changes
  const filteredItems = useMemo(() => {
    return ITEMS.filter((item) =>
      item.toLowerCase().includes(debouncedTerm.toLowerCase()),
    );
  }, [debouncedTerm]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search fruits..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {filteredItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
export default SearchList;
