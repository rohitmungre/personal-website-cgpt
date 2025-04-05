import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './PhotoPage.css';

function PhotoPage() {
  const { filename } = useParams();

  // Dummy photo descriptions (can be expanded later)
  const photoDescriptions = {
    "a4.jpg": "A stunning sunset over the beach with golden skies.",
    "a3.jpg": "A stunning sunset over the beach with golden skies.",
    "a2.jpg": "A stunning sunset over the beach with golden skies.",
    "a1.jpg": "A stunning sunset over the beach with golden skies.",
    "11.jpg": "A stunning sunset over the beach with golden skies.",
    "10.jpg": "A stunning sunset over the beach with golden skies.",
    "9.jpg": "A stunning sunset over the beach with golden skies.",
    "8.jpg": "A breathtaking mountain adventure in the Alps.",
    "7.jpg": "A stunning city skyline under a starry night.",
    "6.jpg": "Lush green forest filled with wildlife and nature sounds.",
    "5.jpg": "Snow-covered mountains under a crisp blue sky.",
    "4.jpg": "A peaceful lake reflecting the surrounding mountains.",
    "3.jpg": "Autumn leaves covering the ground with vibrant colors.",
    "2.jpg": "Golden desert dunes stretching as far as the eye can see.",
    "1.jpg": "Powerful ocean waves crashing against the shore."
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
