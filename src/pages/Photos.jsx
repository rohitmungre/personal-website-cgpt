import React from 'react';
import { Link } from 'react-router-dom';
import usePhotos from '../hooks/usePhotos'; // Adjust the path as needed
import './Photos.css';

function Photos() {
  const photos = usePhotos();

  return (
    <div className="photos-container">
      <div className="photo-grid">
        {photos.map((photo, index) => (
          <div key={index} className="photo-item">
            <Link to={`/photo/${photo.filename}`}>
              <img 
                src={photo.thumbnail} 
                alt={photo.title} 
                loading="lazy" 
              />
              <p>{photo.title}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Photos;
