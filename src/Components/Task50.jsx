import React, { useState, useEffect } from "react";

// A function that returns a Promise which resolves after a delay
const simulateApiCall = (dataToReturn, delay = 1000) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(dataToReturn);
    }, delay);
  });
};

function DataFetcherWithLoader() {
  const [data, setData] = useState(null);
  // State to manage the loader visibility
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMockData = async () => {
      setIsLoading(true); // 1. Start loading state
      const mockUsers = [
        { id: 1, name: "Alice" },
        { id: 2, name: "Bob" },
      ];

      const result = await simulateApiCall(mockUsers, 2000); // 2-second delay

      setData(result);
      setIsLoading(false); // 2. End loading state after data is fetched
    };

    fetchMockData();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      {/* 3. Conditional Rendering */}
      {isLoading ? (
        // Display the loader component when loading
        <div style={{ padding: "15px", border: "1px solid blue" }}>
          🔄 **Loading data... Please wait.**
        </div>
      ) : (
        // Display the data once loading is complete
        <div>
          <h3>Data Loaded:</h3>
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

export default DataFetcherWithLoader;
