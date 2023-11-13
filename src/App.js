import React, { useState } from 'react';

const App = () => {
  const initialItems = [
    'Apple',
    'Banana',
    'Orange',
    'Strawberry',
    'Pineapple',
    'Grapes',
    // Add more items here
  ];

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  // Filtering the items based on the search term
  const filteredItems = initialItems.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearch}
      />
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
