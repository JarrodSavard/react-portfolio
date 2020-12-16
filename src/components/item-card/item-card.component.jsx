import React from 'react';
import './item-card.styles.scss';

const ItemCard = ({ link, name, imageUrl }) => (
  <a href={link} target="_blank" rel="noopener">
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
  </a>
);

export default ItemCard;
