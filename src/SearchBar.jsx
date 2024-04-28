import React from 'react';

function SearchBar({ searchTerm, onSearchChange }) {
    return (
      <div>
        <input
          type="text"
          placeholder="Search transactions"
          value={searchTerm}
          onChange={onSearchChange}
        />
      </div>
    );
  }
  
  export default SearchBar;