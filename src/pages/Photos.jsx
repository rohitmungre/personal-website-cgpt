import React from 'react';
import { Link } from 'react-router-dom';

const photos = [
  { id: 1, url: "photo1.jpg", caption: "Photo 1" },
  { id: 2, url: "photo2.jpg", caption: "Photo 2" },
  { id: 3, url: "photo3.jpg", caption: "Photo 3" }
];

function Photos() {
  return (
    <div>
      <h1>Photos</h1>
      <div className="photo-grid">
        {photos.map(photo => (
          <Link key={photo.id} to={`/photos/${photo.id}`}>
            <img src={photo.url} alt={photo.caption} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Photos;