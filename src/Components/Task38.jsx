import React from "react";

const Table = ({ data, columns }) => {
  if (!data || data.length === 0 || !columns || columns.length === 0) {
    return <p>No data available to display.</p>;
  }

  return (
    <table style={{ borderCollapse: "collapse", width: "100%" }}>
      {/* Table Header: Maps 'columns' prop labels to <th> elements */}
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

      {/* Table Body: Maps 'data' prop items to <tr> elements */}
      <tbody>
        {data.map((item, rowIndex) => (
          <tr key={rowIndex}>
            {columns.map((column) => (
              <td
                key={`${rowIndex}-${column.key}`}
                style={{ border: "1px solid #ddd", padding: "8px" }}
              >
                {/* Accesses the specific data point using column.key */}
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
