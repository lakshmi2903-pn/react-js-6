import React from "react";

const Tables = ({ data, columns }) => {
  // Check for empty or invalid data first
  if (!data || data.length === 0 || !columns || columns.length === 0) {
    // Return a custom empty state UI
    return (
      <div
        style={{
          padding: "20px",
          textAlign: "center",
          border: "1px solid #ddd",
          borderRadius: "5px",
        }}
      >
        <p>
          <strong>☹️ No data found.</strong>
        </p>
        <p>Your search results are empty or the list is currently clear.</p>
      </div>
    );
  }

  // If data exists, proceed with rendering the full table
  return (
    <table style={{ borderCollapse: "collapse", width: "100%" }}>
      {/* ... (Header and Body rendering logic goes here) ... */}
      <thead>
        <tr>
          {columns.map((column) => (
            <th
              key={column.key}
              style={{
                border: "1px solid #ddd",
                padding: "8px",
                textAlign: "left",
                background: "#f2f2f2",
              }}
            >
              {column.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, rowIndex) => (
          <tr key={rowIndex}>
            {columns.map((column) => (
              <td
                key={`${rowIndex}-${column.key}`}
                style={{ border: "1px solid #ddd", padding: "8px" }}
              >
                {item[column.key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Tables;
