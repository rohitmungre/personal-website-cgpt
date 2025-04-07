import React from 'react';
import { useParams, Link } from 'react-router-dom';
import useArt from '../hooks/useArt'; // Adjust path accordingly
import './ArtPage.css';

function PhotoPage() {
  const { filename } = useParams();
  const photos = useArt();
  const photo = photos.find(p => p.filename === filename);

  return (
    <div className="photo-page-container">
      <div className="photo-display">
        <img src={`/art/${filename}`} alt={photo?.title || "Photo"} />
        <p className="photo-description">{photo?.description || "A beautiful moment captured."}</p>
      </div>
      <Link to="/art" className="back-button">Back to Art Gallery</Link>
    </div>
  );
}

export default PhotoPage;
