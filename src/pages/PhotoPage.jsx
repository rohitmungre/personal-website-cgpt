import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './PhotoPage.css';

function PhotoPage() {
  const { filename } = useParams();

  // Dummy photo descriptions (can be expanded later)
  const photoDescriptions = {
    "dp.jpg": "A stunning sunset over the beach with golden skies.",
    "photo2.jpg": "A breathtaking mountain adventure in the Alps.",
    "photo3.jpg": "A stunning city skyline under a starry night.",
    "photo4.jpg": "Lush green forest filled with wildlife and nature sounds.",
    "photo5.jpg": "Snow-covered mountains under a crisp blue sky.",
    "photo6.jpg": "A peaceful lake reflecting the surrounding mountains.",
    "photo7.jpg": "Autumn leaves covering the ground with vibrant colors.",
    "photo8.jpg": "Golden desert dunes stretching as far as the eye can see.",
    "photo9.jpg": "Powerful ocean waves crashing against the shore."
  };

  return (
    <div className="photo-page-container">
      <div className="photo-display">
        <img src={`/images/${filename}`} alt={filename} />
        <p className="photo-description">{photoDescriptions[filename] || "A beautiful moment captured."}</p>
      </div>
      <Link to="/photos" className="back-button">Back to Gallery</Link>
    </div>
  );
}

export default PhotoPage;
