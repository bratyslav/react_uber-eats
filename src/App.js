import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import HomePage from './HomePage';

const App = () => {

  const [scrolled, wasScrolled] = useState(false);

  const onscroll = () => {
    if (window.pageYOffset != 0) {
      wasScrolled(true);
    } else {
      wasScrolled(false);
    };
  };

  window.addEventListener('scroll', onscroll);

  return (
    <div>
      <Header scrolled={scrolled} />
      
      <HomePage />

      <Footer />
    </div>
  )
}

export default App;

