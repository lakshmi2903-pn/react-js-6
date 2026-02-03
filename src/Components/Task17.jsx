import React, { useState } from "react";

const DATA = [
  { id: 1, name: "Apple", tags: ["Fruit", "Red"] },
  { id: 2, name: "Broccoli", tags: ["Vegetable", "Green"] },
  { id: 3, name: "Cherry", tags: ["Fruit", "Red"] },
  { id: 4, name: "Spinach", tags: ["Vegetable", "Green"] },
];

const ALL_TAGS = ["Fruit", "Vegetable", "Red", "Green"];

function TagFilter() {
  const [selectedTags, setSelectedTags] = useState([]);

  const toggleTag = (tag) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag],
    );
  };

  // Logic: Show all items if no tags are selected; otherwise, filter.
  const filteredData =
    selectedTags.length === 0
      ? DATA
      : DATA.filter((item) =>
          // Change '.some' to '.every' if you want "AND" logic
          selectedTags.some((tag) => item.tags.includes(tag)),
        );

  return (
    <div>
      <h3>Filter by Tags:</h3>
      {ALL_TAGS.map((tag) => (
        <button
          key={tag}
          onClick={() => toggleTag(tag)}
          style={{
            backgroundColor: selectedTags.includes(tag) ? "lightblue" : "white",
          }}
        >
          {tag}
        </button>
      ))}

      <ul>
        {filteredData.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}
export default TagFilter;
