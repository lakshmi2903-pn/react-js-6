import React, { useState } from 'react';

// 1. Define initial state outside the component so it remains constant
const initialState = {
  username: '',
  email: '',
  count: 0
};

export default function MyForm() {
  // 2. Initialize state with the object
  const [formData, setFormData] = useState(initialState);

  // Helper to handle input changes dynamically
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // 3. Reset function: Simply set the state back to the original object
  const resetAll = () => {
    setFormData(initialState);
  };

  return (
    <div style={{ padding: '20px' }}>
      <input 
        name="username" 
        value={formData.username} 
        onChange={handleChange} 
        placeholder="Username" 
      />
      <input 
        name="email" 
        value={formData.email} 
        onChange={handleChange} 
        placeholder="Email" 
      />
      
      <button onClick={() => setFormData(p => ({ ...p, count: p.count + 1 }))}>
        Count: {formData.count}
      </button>

      {/* Trigger Reset */}
      <button onClick={resetAll} style={{ marginLeft: '10px', color: 'red' }}>
        Reset All
      </button>
    </div>
  );
}
