import React from "react";

// The reusable component
const Table = ({ data, columns }) => {
  if (!data || data.length === 0 || !columns || columns.length === 0) {
    return <p>No data available to display.</p>;
  }

  return (
    <table style={{ borderCollapse: "collapse", width: "100%" }}>
      {/* Table Header (uses column labels) */}
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

      {/* Table Body (iterates through data) */}
      <tbody>
        {data.map((item, rowIndex) => (
          <tr key={rowIndex}>
            {columns.map((column) => (
              <td
                key={`${rowIndex}-${column.key}`}
                style={{ border: "1px solid #ddd", padding: "8px" }}
              >
                {/* Renders the value using the key defined in the columns prop */}
                {item[column.key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
