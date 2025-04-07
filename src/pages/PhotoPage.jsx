import React from 'react';
import { useParams, Link } from 'react-router-dom';
import usePhotos from '../hooks/usePhotos'; // Adjust path accordingly
import './PhotoPage.css';

function PhotoPage() {
  const { filename } = useParams();
  const photos = usePhotos();
  const photo = photos.find(p => p.filename === filename);

  return (
    <div className="photo-page-container">
      <div className="photo-display">
        <img src={`/images/${filename}`} alt={photo?.title || "Photo"} />
        <p className="photo-description">{photo?.description || "A beautiful moment captured."}</p>
      </div>
      <Link to="/photos" className="back-button">Back to Gallery</Link>
    </div>
  );
}

export default PhotoPage;
