import React, { Component } from 'react';
import './App.css';
import RestaurantCard from './RestaurantCard';
import Header from './Header';
import Footer from './Footer';

class App extends Component {
  state = {
    cards: [1, 1, 1, 1, 1, 1, 1, 1, 1]
  }

  render() {
    return (
      <div>
        <Header />

        <main>
          <div className="content">
            {
              this.state.cards.map(card => <RestaurantCard />)
            }
          </div>
        </main>

        <Footer />
      </div>
    )
  }
}

export default App;

