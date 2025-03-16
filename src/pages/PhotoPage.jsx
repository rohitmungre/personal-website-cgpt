import React from 'react';
import { useParams } from 'react-router-dom';

const photos = {
  1: { url: "photo1.jpg", caption: "A beautiful sunrise", tags: ["Nature", "Sunrise"] },
  2: { url: "photo2.jpg", caption: "City skyline at night", tags: ["City", "Night"] },
  3: { url: "photo3.jpg", caption: "Mountain adventure", tags: ["Travel", "Mountains"] }
};

function PhotoPage() {
  const { id } = useParams();
  const photo = photos[id];

  if (!photo) {
    return <p>Photo not found</p>;
  }

  return (
    <div>
      <h1>Photo {id}</h1>
      <img src={photo.url} alt={photo.caption} />
      <p>{photo.caption}</p>
      <p>Tags: {photo.tags.join(', ')}</p>
    </div>
  );
}

export default PhotoPage;