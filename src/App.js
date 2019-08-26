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
        <div class="search">
          <div class="search__icon"></div>
          <form action="#" method="POST">
              <input type="text" size="20" placeholder="Search for restaurant..."/>
          </form>
        </div>
        <hr class="search__underline"/>

        <div className="location-block">
          <div className="location-block__delivery-time-wrapper">
            When
            <div className="location-block__delivery-time">
              <input
                placeholder="ASAP"
                className="location-block_delovery-time-input"
              />
            </div>
          </div>
          <div className="location-block__location-wrapper">
            To
            <div className="location-block__location">
              <label htmlFor="location">
                <svg width="28px" height="28px" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12.0001 2.83398c2 0 4.0833.75 5.5833 2.33334 3.0833 3.08333 3.0833 8.16668 0 11.16668l-5.5833 5.6667-5.58335-5.5834c-3.08334-3.0833-3.08334-8.16665 0-11.24998 1.5-1.58334 3.58335-2.33334 5.58335-2.33334zm0 15.66672 3.8333-3.8334c2.0833-2.1666 2.0833-5.58332 0-7.74998-1-1-2.4167-1.58334-3.8333-1.58334-1.4167 0-2.83335.58334-3.83335 1.58334-2.08334 2.16666-2.08334 5.58338 0 7.74998zm1.6666-7.75c0 .9204-.7462 1.6666-1.6666 1.6666-.9205 0-1.6667-.7462-1.6667-1.6666 0-.92052.7462-1.66672 1.6667-1.66672.9204 0 1.6666.7462 1.6666 1.66672z" fillRule="evenodd" clipRule="evenodd" fill="#1F1F1F"></path></svg>
              </label>
              <input 
                placeholder="London"
                className="location-block_location-input"
                id="location"
              />
            </div>
          </div>
        </div>

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

