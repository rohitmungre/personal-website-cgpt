import React from 'react';
import { Link } from 'react-router-dom';
import useArt from '../hooks/useArt';
import './Art.css';

function Art() {
  const artworks = useArt();

  return (
    <div className="photos-container">
      <div className="photo-grid">
        {artworks.map((art, index) => (
          <div key={index} className="photo-item">
            <Link to={`/art/${art.filename}`}>
              <img 
                src={art.thumbnail} 
                alt={art.title} 
                loading="lazy" 
              />
              <p>{art.title}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Art;
