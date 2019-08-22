import React, { useState } from 'react';
import './App.css';
import RestaurantCard from './RestaurantCard';
import Header from './Header';
import Footer from './Footer';
const classNames = require('classnames');

const App = () => {
  const cards = [1, 1, 1, 1, 1, 1, 1, 1, 1];

  const [scrolled, wasScrolled] = useState(false);

  const onscroll = () => {
    if (window.pageYOffset != 0) {
      wasScrolled(true);
    } else {
      wasScrolled(false);
    };
  };

  const contentClassName = classNames({
    'content': !scrolled,
    'content--scrolled': scrolled
  });

  window.addEventListener('scroll', onscroll)

  return (
    <div>
      <Header scrolled={scrolled} />

      <main>
        <div className={contentClassName}>
          {
            cards.map(card => <RestaurantCard />)
          }
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default App;

