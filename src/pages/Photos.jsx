import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Photos.css';

function Photos() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    // Manually listing images (since frontend cannot auto-detect public/ files)
    const images = [
      { filename: "a1.jpg", title: "Sunset Over the Beach" },
      { filename: "a2.jpg", title: "Sunset Over the Beach" },
      { filename: "a3.jpg", title: "Sunset Over the Beach" },
      { filename: "a4.jpg", title: "Sunset Over the Beach" },
      { filename: "9.jpg", title: "Sunset Over the Beach" },
      { filename: "11.jpg", title: "Mountain Adventure" },
      { filename: "7.jpg", title: "City Skyline at Night" },
      { filename: "6.jpg", title: "Lush Green Forest" },
      { filename: "5.jpg", title: "Snowy Mountains" },
      { filename: "4.jpg", title: "Calm Lake Reflection" },
      { filename: "3.jpg", title: "Autumn Leaves" },
      { filename: "10.jpg", title: "Desert Dunes" },
      { filename: "1.jpg", title: "Ocean Waves" }
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
