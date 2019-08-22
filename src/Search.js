import React from 'react';
import './Search.css';

const Search = () => {
  return (
    <div>
    <label for="search">
      <div className="search">
        <div className="search__icon"></div>
        <form action="#" method="POST">
            <input
              type="text"
              size="20"
              placeholder="Search for restaurant..."
              id="search"
            />
            <input type="submit" name="submit_search" />
        </form>
      </div>
    </label>  

      <hr className="search__underline"></hr>
    </div>
  );
};

export default Search;