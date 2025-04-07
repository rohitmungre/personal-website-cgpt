import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import usePhotos from '../hooks/usePhotos';
import './Photos.css';

function Photos() {
  const photos = usePhotos();

  return (
    <div className="photos-container">
      <div className="photo-grid">
        {photos.map((photo, index) => (
          <div key={index} className="photo-item">
            <Link to={`/photo/${photo.filename}`}>
              <img src={`/images/${photo.filename}`} alt={photo.title} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Photos;
