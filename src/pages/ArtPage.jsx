import React from 'react';
import { useParams, Link } from 'react-router-dom';
import useArt from '../hooks/useArt'; // Adjust path accordingly
import './ArtPage.css';

function ArtPage() {
  const artworks = useArt();
  const { filename } = useParams();
  const art = artworks.find(a => a.filename === filename);
  const baseUrl = import.meta.env.BASE_URL || './';
  
  if (!artworks.length) {
    return <div>Loading artwork...</div>;
  }

  if (!art) {
    return <div>Artwork not found</div>;
  }

  return (
    <div className="photo-page-container">
      <div className="photo-display">
        <img 
          src={`${baseUrl}art/${art.filename}`} 
          alt={art.title || "Artwork"} 
          loading="lazy" 
          className="full-image"
        />
        <p className="photo-description">{art.description || "A beautiful piece of art."}</p>
      </div>
      <Link to="/art" className="back-button">Back to Art Gallery</Link>
    </div>
  );
}

export default ArtPage;
