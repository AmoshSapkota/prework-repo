import React from 'react';

const card = ({ name, url, description, imageURL }) => {
  return (
    <div className="card">
      {imageURL && <img src={imageURL} alt={`${name}`} />}
      <h2>{name}</h2>
      <p>{description}</p>
      <a href={url} target="_blank" rel="noopener noreferrer">Visit {name}</a>
    </div>
  );
};

export default card;
