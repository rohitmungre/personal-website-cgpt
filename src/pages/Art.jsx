import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useArt from '../hooks/useArt';
import './Art.css';

function Art() {
  const photos = useArt();

  return (
    <div className="photos-container">
      <div className="photo-grid">
        {photos.map((photo, index) => (
          <div key={index} className="photo-item">
            <Link to={`/art/${photo.filename}`}>
              <img src={`/art/${photo.filename}`} alt={photo.title} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Art;
