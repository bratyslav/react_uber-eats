import React, { Component } from 'react';
import './App.css';
import RestaurantCard from './RestaurantCard';
import Header from './Header';
import Footer from './Footer';
import Search from './Search';

class App extends Component {
  state = {
    cards: [1, 1, 1, 1, 1, 1, 1, 1, 1]
  }

  render() {
    return (
      <div>
        <Header />

        <main>
          <Search />

          <form action="#" method="POST">
            <div className="delivery-address-mobile">
              <div className="delivery-address__store-field">
                <input 
                  type="text" 
                  className="delivery-address__store-input" 
                  name="store" 
                  aria-describedby="store address"
                />
              </div>

              <div className="delivery-address__to">
                  to
              </div>

              <div className="delivery-address__user-address-field">
                <svg width="28px" height="28px" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m12.0001 2.83398c2 0 4.0833.75 5.5833 2.33334 3.0833 3.08333 3.0833 8.16668 0 11.16668l-5.5833 5.6667-5.58335-5.5834c-3.08334-3.0833-3.08334-8.16665 0-11.24998 1.5-1.58334 3.58335-2.33334 5.58335-2.33334zm0 15.66672 3.8333-3.8334c2.0833-2.1666 2.0833-5.58332 0-7.74998-1-1-2.4167-1.58334-3.8333-1.58334-1.4167 0-2.83335.58334-3.83335 1.58334-2.08334 2.16666-2.08334 5.58338 0 7.74998zm1.6666-7.75c0 .9204-.7462 1.6666-1.6666 1.6666-.9205 0-1.6667-.7462-1.6667-1.6666 0-.92052.7462-1.66672 1.6667-1.66672.9204 0 1.6666.7462 1.6666 1.66672z" fillRule="evenodd" clipRule="evenodd" fill="#1F1F1F"></path></svg>
                <input 
                  type="text" 
                  className="delivery-address__user-address-input" 
                  name="user-address" 
                  aria-describedby="store address"
                />
              </div>  
            </div>

            <input type="submit" name="submit_delivery_address" />
          </form>
          
          <div className="main-content-wrapper">
            <h2 className="headline">Kyiv Restaurants</h2>
            <div className="content">
              {
                this.state.cards.map(card => <RestaurantCard />)
              }
            </div>
          </div>  
        </main>

        <Footer />
      </div>
    )
  }
}

export default App;

