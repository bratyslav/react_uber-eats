import React from 'react';
import './RestaurantCard.css';

const RestaurantCard = () => {
  return (
    <a href="#" className="restaurant-card__wrapper-link">
      <div className="restaurant-card">
        <img
          src="https://d1ralsognjng37.cloudfront.net/ed032859-05fa-4761-9a4f-ac5fb7d5859a"
          alt="restaurant foto"
        />

        <div className="restaurant-card__restaurant-name">
          <h3>To Be</h3>
        </div>

        <div className="restaurant-card__type-of-dishes"> 
          <h4>
            &#8372;&#8372; &middot; Японська &middot; Азiатська &middot; Сушi
          </h4>  
        </div>

        <div className="restaurant-card__time-of-delivery">
          <h5>25 - 35 Min</h5>
        </div>
      </div>
    </a>
  );
};

export default RestaurantCard;