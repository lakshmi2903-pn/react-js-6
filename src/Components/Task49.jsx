import React, { useState, useEffect } from "react";

// Using the helper function defined above
// const simulateApiCall = (data, delay) => new Promise(resolve => setTimeout(() => resolve(data), delay));

function DataFetcher() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMockData = async () => {
      setIsLoading(true);
      const mockUsers = [
        { id: 1, name: "Alice" },
        { id: 2, name: "Bob" },
      ];

      // Await the simulated API response (3-second delay)
      const result = await simulateApiCall(mockUsers, 3000);

      setData(result);
      setIsLoading(false);
    };

    fetchMockData();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      {isLoading ? (
        <p>Loading data...</p>
      ) : (
        <div>
          <h3>Data Loaded (3s delay):</h3>
          <ul>
            {data.map((user) => (
              <li key={user.id}>{user.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default DataFetcher;
