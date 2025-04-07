import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Art.css';

function Art() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    // Manually listing images (since frontend cannot auto-detect public/ files)
    const images = [
      { filename: "a1.jpg", title: "Sunset Over the Beach" },
      { filename: "a2.jpg", title: "Sunset Over the Beach" },
      { filename: "a3.jpg", title: "Sunset Over the Beach" },
      { filename: "a4.jpg", title: "Sunset Over the Beach" },
    ];

    setPhotos(images);
  }, []);

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

export default Art;
