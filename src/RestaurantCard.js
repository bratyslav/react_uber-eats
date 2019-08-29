import React from 'react';
import './RestaurantCard.css';

const RestaurantCard = ({ shop }) => {
  return (
    <a href="#" className="restaurant-card__wrapper-link">
      <div className="restaurant-card">
        <img
          src={shop.heroImageUrl}
          alt="restaurant foto"
        />

        <div className="restaurant-card__restaurant-name">
          <h3>{shop.title}</h3>
        </div>

        <div className="restaurant-card__type-of-dishes"> 
          <h4>
            {shop.categories.join(' · ')}
          </h4>  
        </div>

        <div className="restaurant-card__time-of-delivery">
          <h5>{shop.etaRange.text}</h5>
        </div>
      </div>
    </a>
  );
};

export default RestaurantCard;