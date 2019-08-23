import React from 'react';
const classNames = require('classnames');
import './Header.css';
import Search from './Search';
import Deliver from './Deliver';
import Location from './Location';

const Header = ({ scrolled }) => {

  const headerClassName = classNames({
    'header': !scrolled,
    'header--scrolled': scrolled
  })

  return (
    <header className={headerClassName}>
      <div>
        <img
          className="header__uber-logo"
          src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/f8f0721f871b3704cce92eb96bc6e504.svg"
          alt="uber eats logo"
        />
        <Location />
        <Deliver />
      </div>

      <div>
        <Search />
        <div  className="header__sign-in">
          <a href="#">Sign in</a>
        </div>
      </div>
    </header>
  )
}

export default Header;