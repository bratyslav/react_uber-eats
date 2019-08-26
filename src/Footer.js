import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__logo-wrapper">
        <a href="#">
          <img
            className="footer__logo"
            src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/12c47a69e1022b581a7e823e9bd45466.svg"
            alt="footer of page" />
        </a>  
        <hr />
      </div>

      <nav className="nav">
        <div className="nav__language">
          <select
            className="nav__language-select"
            name="language-selection"
            defaultChecked="english"
          >
            <option value="english">english</option>
            <option value="rusian">русский</option>
            <option value="ukrainian">українська</option>
          </select>
        </div>
        <div>
          <a href="#">About UberEats</a>
        </div>
        <div>
            <a href="#">See all sities</a>
        </div>

        <div>
            <a href="#">Become a Delivery Partner</a>
        </div>
        <div>
            <a href="#">Pricing</a>
        </div>

        <div className="nav__hashtag">
          <span className="hashtag__hash">#</span>
          <a href="#">UberEats</a>
        </div>
        <div>
            <a href="#">Become a Restaurant Partner</a>
        </div>
        <div>
            <a href="#">Help</a>
        </div>

        <div>
            <a href="#">
              <img src="https://bratyslav.github.io/uber-eats/images/share-icons.png" alt="link to share" />
            </a>  
        </div>
        <div></div>
        <div>
            <a href="#">FAQs</a>
        </div>

        <div className="nav__horizontal-line">
          <hr />
        </div>

        <div className="nav__app-stores">
          <a href="#">
            <img
              src="https://bratyslav.github.io/uber-eats/images/appstore-icon.png"
              alt="link to app sore"
            />
          </a>

          <a href="#">  
            <img
              src="https://bratyslav.github.io/uber-eats/images/googleplay-icon.png"
              alt="link to google play store"
            />
          </a>
        </div>

        <div className="nav__horizontal-line">
          <hr />
        </div>

        <div>
          <a href="#">&copy; 2019 Uber Technologies Inc.</a>
        </div>
        <div>
            <a href="#">Privacy</a>
        </div>
        <div>
            <a href="#">Terms</a>
        </div>

      </nav>
    </footer>
  )
};

export default Footer;