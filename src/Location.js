import React, { useState, useRef, useEffect } from 'react';
import './Location.css';
import { L } from './autocomplete/L.js';
import { Lo } from './autocomplete/Lo.js';
import { Lon } from './autocomplete/Lon.js';
import { Lond } from './autocomplete/Lond.js';
import { Londo } from './autocomplete/Londo.js';
import { London } from './autocomplete/London.js';
const classNames = require('classnames');

const Location = () => {
  const [isActive, activate] = useState(false);
  const [searchItem, recordSearchItem] = useState('');
  const wrapperRef = useRef(null);
  const [animation, setAnimation] = useState(false);
  const [inputAnimation, setInputAnimation] = useState(false);
  useOutsideAlterter(wrapperRef);

  const desactivate = () => {
    activate(false);
    recordSearchItem('');
    setInputAnimation(false);

    setTimeout(() => {
      setAnimation(false);
    }, 0);
  };

  const activateInput = () => {
    activate(true);

    setTimeout(() => {
      setInputAnimation(true);
    }, 0);
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

  const getAutocomplete = () => {
    switch (searchItem) {
      case '':
        return null;
      case 'L':
        return L.data;
      case 'Lo':
        return Lo.data;
      case 'Lon':
        return Lon.data;
      case 'Lond':
        return Lond.data;
      case 'Londo':
        return Londo.data;
      case 'London':
        return London.data;
      default:
        return null;
    }
  };

  const searchItemClassName = classNames({
    'header__item-bottom-list-element': searchItem.length !== 0,
    'location__bottom-list-element': searchItem.length !== 0,
    '__hidden': searchItem.length === 0
  });

  const clearClassName = classNames({
    'header__item-clear-button': searchItem.length !== 0,
    '__hidden': searchItem.length === 0
  });

  const animationClassName = classNames({
    'search__animation-max-margin': animation,
    'search__animation-min-margin': !animation
  });

  const animationInputClassName = classNames({
    'header__item--active-input': !inputAnimation,
    'header__item--active-input-animation': inputAnimation
  });

  return (
    isActive ?

    <div>
      <form className="header__item--active-wrapper">
        <div className="header__item--active" ref={wrapperRef}>
          <svg width="28px" height="28px" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12.0001 2.83398c2 0 4.0833.75 5.5833 2.33334 3.0833 3.08333 3.0833 8.16668 0 11.16668l-5.5833 5.6667-5.58335-5.5834c-3.08334-3.0833-3.08334-8.16665 0-11.24998 1.5-1.58334 3.58335-2.33334 5.58335-2.33334zm0 15.66672 3.8333-3.8334c2.0833-2.1666 2.0833-5.58332 0-7.74998-1-1-2.4167-1.58334-3.8333-1.58334-1.4167 0-2.83335.58334-3.83335 1.58334-2.08334 2.16666-2.08334 5.58338 0 7.74998zm1.6666-7.75c0 .9204-.7462 1.6666-1.6666 1.6666-.9205 0-1.6667-.7462-1.6667-1.6666 0-.92052.7462-1.66672 1.6667-1.66672.9204 0 1.6666.7462 1.6666 1.66672z" fillRule="evenodd" clipRule="evenodd" fill="#1F1F1F"></path></svg>

          <input
            className={animationInputClassName}
            type="text"
            placeholder="Enter delivery address"
            id="search"
            value={searchItem}
            onChange={() => recordSearchItem(event.target.value)}
            autoFocus={true}
            autoComplete="off"
          />

          <button
            onClick={() => {recordSearchItem(''); event.preventDefault()}}
            className={clearClassName}
          >
            Clear
          </button>

          <button onClick={desactivate} className="header__item-desactivate-button">
            <svg width="28px" height="28px" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m19.5831 6.24931-1.8333-1.83329-5.75 5.83328-5.75-5.83328-1.8333 1.83329 5.8333 5.74999-5.8333 5.75 1.8333 1.8333 5.75-5.8333 5.75 5.8333 1.8333-1.8333-5.8333-5.75z" fill="#1F1F1F"></path></svg>
          </button>
        </div>

        {
          getAutocomplete() ?

          getAutocomplete().map(item => (
            <div className={searchItemClassName}>
              <div>{item.addressLine1}</div>
              <div>{item.addressLine2}</div>
            </div>
          ))
          
          : ''
        }

        
      </form>
    </div>

    :
    
    <div className={`button__wrapper ${animationClassName}`}>
      <button onClick={() => {activateInput(); setAnimation(true)}}>
        <div className="header__button-icon">
          <svg width="28px" height="28px" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12.0001 2.83398c2 0 4.0833.75 5.5833 2.33334 3.0833 3.08333 3.0833 8.16668 0 11.16668l-5.5833 5.6667-5.58335-5.5834c-3.08334-3.0833-3.08334-8.16665 0-11.24998 1.5-1.58334 3.58335-2.33334 5.58335-2.33334zm0 15.66672 3.8333-3.8334c2.0833-2.1666 2.0833-5.58332 0-7.74998-1-1-2.4167-1.58334-3.8333-1.58334-1.4167 0-2.83335.58334-3.83335 1.58334-2.08334 2.16666-2.08334 5.58338 0 7.74998zm1.6666-7.75c0 .9204-.7462 1.6666-1.6666 1.6666-.9205 0-1.6667-.7462-1.6667-1.6666 0-.92052.7462-1.66672 1.6667-1.66672.9204 0 1.6666.7462 1.6666 1.66672z" fillRule="evenodd" clipRule="evenodd" fill="#1F1F1F"></path></svg>
        </div>
        <div className="header__button-text">
          London
        </div>
      </button>
    </div>
  );
};

export default Location;