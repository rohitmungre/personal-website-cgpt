import React from 'react';
import { useParams, Link } from 'react-router-dom';
import usePhotos from '../hooks/usePhotos'; // Make sure this path is correct
import './PhotoPage.css';

function PhotoPage() {
  const { filename } = useParams();
  const photos = usePhotos();
  const photo = photos.find(p => p.filename === filename);

  if (!photo) {
    return <div>Photo not found</div>;
  }

  return (
    <div className="photo-page-container">
      <div className="photo-display">
        <img 
          src={`/images/${photo.filename}`}  // Fixed URL string interpolation
          alt={photo.title} 
          className="full-image" 
          loading="lazy" 
        />
        <p className="photo-description">{photo.description || "A beautiful moment captured."}</p>
      </div>
      <Link to="/photos" className="back-button">Back to Gallery</Link>
    </div>
  );
}

export default PhotoPage;
