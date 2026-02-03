import React, { useState, useMemo } from "react";

const DATA = ["Banana", "Apple", "Date", "Cherry"];

function SortedList() {
  const [sortOrder, setSortOrder] = useState("asc"); // 'asc' or 'desc'

  const sortedData = useMemo(() => {
    return [...DATA].sort((a, b) => {
      if (sortOrder === "asc") {
        return a.localeCompare(b);
      } else {
        return b.localeCompare(a);
      }
    });
  }, [sortOrder]);

  return (
    <div>
      <select onChange={(e) => setSortOrder(e.target.value)}>
        <option value="asc">A – Z</option>
        <option value="desc">Z – A</option>
      </select>

      <ul>
        {sortedData.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
export default SortedList;
