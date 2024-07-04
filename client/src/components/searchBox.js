// client/src/components/SearchBox.js
import React, { useState } from 'react';
import Swal from 'sweetalert2';

const SearchBox = ({ onSearch }) => {
  const [keyword, setKeyword] = useState('');

  const swallEmptyKeyword = () => {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Tag is empy, please check again!",
    });
  }

  const handleSearch = () => {
    keyword ? onSearch(keyword) : swallEmptyKeyword();
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch(e);
    }
  };

  return (
    <div className="search-box">
      <input
        type="text"
        value={keyword}
        onKeyDown={handleKeyPress}
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Search by tag"
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBox;
