import React, { useState, useRef, useEffect } from 'react';
import './Search.css';
const classNames = require('classnames');

const Search = () => {
  const [isActive, activate] = useState(false);
  const [searchItem, recordSearchItem] = useState('');
  const wrapperRef = useRef(null);
  useOutsideAlterter(wrapperRef);

  const desactivate = () => {
    activate(false);
    recordSearchItem('');
  }

  function useOutsideAlterter(ref) {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        desactivate();
      };
    };
  
    useEffect(() => {
      document.addEventListener('mousedown', handleClickOutside);
      return() => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    });
  };

  const searchItemClassName = classNames({
    'search__item': searchItem.length !== 0,
    '__hidden': searchItem.length === 0
  });

  const clearClassName = classNames({
    'search__clear': searchItem.length !== 0,
    '__hidden': searchItem.length === 0
  });

  return (
    isActive ?
    
    <div>
      <form className="search--active__wrapper">
        <div className="search--active" ref={wrapperRef}>
          <svg width="28px" height="28px" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m20.8333 19-3.6666-3.6667c.9167-1.3333 1.4999-2.9166 1.4999-4.6666 0-4.33334-3.5833-7.9167-7.9167-7.9167-4.33331 0-7.91665 3.58336-7.91665 7.9167 0 4.3333 3.58334 7.9167 7.91665 7.9167 1.75 0 3.3334-.5834 4.6668-1.5001l3.6666 3.6667zm-15.50005-8.25c0-2.99999 2.41667-5.41666 5.41665-5.41666 3 0 5.4167 2.41667 5.4167 5.41666 0 3-2.4167 5.4167-5.4167 5.4167-2.99998 0-5.41665-2.4167-5.41665-5.4167z" fill="#1F1F1F"></path></svg>

          <input
            type="text"
            placeholder="What are you craving?"
            id="search"
            value={searchItem}
            onChange={() => recordSearchItem(event.target.value)}
            autoFocus={true}
            autoComplete="off"
          />

          <button
            onClick={() => recordSearchItem('')}
            className={clearClassName}
          >
            Clear
          </button>

          <button onClick={desactivate} className="search__desactivate">
            <svg width="28px" height="28px" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m19.5831 6.24931-1.8333-1.83329-5.75 5.83328-5.75-5.83328-1.8333 1.83329 5.8333 5.74999-5.8333 5.75 1.8333 1.8333 5.75-5.8333 5.75 5.8333 1.8333-1.8333-5.8333-5.75z" fill="#1F1F1F"></path></svg>
          </button>
        </div>

        <div className={searchItemClassName}>
          {
            `Search for "${searchItem}"`
          }
        </div>
      </form>
    </div>

    :
    
    <div className="button__wrapper">
      <button onClick={() => {activate(true)}}>
        <div className="header__button-icon">
          <svg width="28px" height="28px" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m20.8333 19-3.6666-3.6667c.9167-1.3333 1.4999-2.9166 1.4999-4.6666 0-4.33334-3.5833-7.9167-7.9167-7.9167-4.33331 0-7.91665 3.58336-7.91665 7.9167 0 4.3333 3.58334 7.9167 7.91665 7.9167 1.75 0 3.3334-.5834 4.6668-1.5001l3.6666 3.6667zm-15.50005-8.25c0-2.99999 2.41667-5.41666 5.41665-5.41666 3 0 5.4167 2.41667 5.4167 5.41666 0 3-2.4167 5.4167-5.4167 5.4167-2.99998 0-5.41665-2.4167-5.41665-5.4167z" fill="#1F1F1F"></path></svg>
        </div>

        <div className="header__button-text">
          Search
        </div>
      </button>
    </div>
  );
};

export default Search;