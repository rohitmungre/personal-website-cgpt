import React from 'react';
import { useParams, Link } from 'react-router-dom';
import useArt from '../hooks/useArt'; // Adjust path accordingly
import './ArtPage.css';

function ArtPage() {
  const { filename } = useParams();
  const artworks = useArt();
  const art = artworks.find(a => a.filename === filename);

  if (!art) {
    return <div>Artwork not found</div>;
  }

  return (
    <div className="photo-page-container">
      <div className="photo-display">
        <img 
          src={`/art/${art.filename}`} 
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
