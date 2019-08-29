import React, { useState } from 'react';
import './Deliver.css';
const classNames = require('classnames');

const Deliver = () => {
  const [focused, toggleFocus] = useState(false);

  const deliverClassName = classNames({
    'deliver': focused
  })

  const deliverItemsClassName = classNames({
    'deliver__items': focused,
    '__hidden': !focused
  })

  return (
    <div className="button__wrapper">
      <button
        onFocus={() => toggleFocus(true)}
        onBlur={() => toggleFocus(false)}
        className={deliverClassName}
      >
        <div className="header__button-icon">
          <svg width="28px" height="28px" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="m2.83325 12.0007c0-5.08338 4.08334-9.16672 9.16665-9.16672 5.0834 0 9.1667 4.08334 9.1667 9.16672 0 5.0833-4.0833 9.1666-9.1667 9.1666-5.08331 0-9.16665-4.0833-9.16665-9.1666zm2.5 0c0 3.6666 3 6.6666 6.66665 6.6666 3.6667 0 6.6667-3 6.6667-6.6666 0-3.66672-3-6.66672-6.6667-6.66672-3.66665 0-6.66665 3-6.66665 6.66672zm5.41665 2.0833v-6.25002h2.5v3.75002h2.9167v2.5z" fill="#1F1F1F" fillRule="evenodd"></path></svg>
        </div>
        <div className="header__button-text">
          Deliver now
        </div>
      </button>

      <div className={deliverItemsClassName}>
        <div>
          Deliver now
        </div>
        <div>
          Set a time
        </div>
      </div>
    </div>
  );
};

export default Deliver;