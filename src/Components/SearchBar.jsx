import React from 'react';
import './SearchBar.css';

const SearchBar = ({ onSearch }) => {
  return (
    <input
      type="text"
      className="search-bar"
      placeholder="Search products..."
      onChange={(e) => onSearch(e.target.value)}
    />
  );
};

export default SearchBar;
