// SearchBox.js
import React, { useState } from 'react';

const SearchBox = ({ onSubmit }) => {
  const [movieName, setMovieName] = useState('');

  const handleNameChange = event => {
    setMovieName(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (movieName.trim() === '') {
      alert('Please enter your name of the image');
      return;
    }

    onSubmit(movieName);
    setMovieName('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={movieName} onChange={handleNameChange} />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchBox;
