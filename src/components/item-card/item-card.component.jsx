import React from 'react';
import './item-card.styles.scss';

const ItemCard = ({ id, name, price, imageUrl }) => (
  <div className="collection-item">
    <div
      className="image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />
    <div className="collection-footer">
      <span className="name">{name}</span>
      
    </div>
  </div>
);

export default ItemCard;
