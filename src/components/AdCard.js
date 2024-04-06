import React from 'react';

function AdCard({ ad, onDelete }) {
  return (
    <div>
      <h3>{ad.title}</h3>
      <p>{ad.description}</p>
      <button onClick={() => onDelete(ad.id)}>Удалить</button>
    </div>
  );
}

export default AdCard;
