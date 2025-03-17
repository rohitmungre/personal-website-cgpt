import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Photos.css';

function Photos() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    // Manually listing images (since frontend cannot auto-detect public/ files)
    const images = [
      { filename: "dp.jpg", title: "Sunset Over the Beach" },
      { filename: "dp.jpg", title: "Mountain Adventure" },
      { filename: "dp.jpg", title: "City Skyline at Night" },
      { filename: "dp.jpg", title: "Lush Green Forest" },
      { filename: "dp.jpg", title: "Snowy Mountains" },
      { filename: "dp.jpg", title: "Calm Lake Reflection" },
      { filename: "dp.jpg", title: "Autumn Leaves" },
      { filename: "dp.jpg", title: "Desert Dunes" },
      { filename: "dp.jpg", title: "Ocean Waves" }
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

export default Photos;
