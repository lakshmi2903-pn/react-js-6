import React from "react";
// Make sure you have a CSS file imported, e.g., import './Task.css';

const Table2 = ({ data, columns }) => {
  // 1. Handle Empty State: Display a message if no data is available
  if (!data || data.length === 0 || !columns) {
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
          <strong>No data available.</strong>
        </p>
      </div>
    );
  }

  return (
    <table style={{ borderCollapse: "collapse", width: "100%" }}>
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
          // 2. Add a CSS class for the hover effect
          <tr key={rowIndex} className="table-row-hoverable">
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

export default Table2;
