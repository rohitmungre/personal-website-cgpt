import { useState, useEffect } from 'react';

const usePhotos = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch('/images/manifest.json')
      .then(response => response.json())
      .then(data => {
        // Only load thumbnail paths in the initial fetch
        const updatedPhotos = data.map(photo => ({
          filename: photo.filename,
          title: photo.title,
          description: photo.description,
          thumbnail: `/images/thumbnails/${photo.filename}`
        }));
        setPhotos(updatedPhotos);
      })
      .catch(error => console.error('Error fetching manifest.json:', error));
  }, []);

  return photos;
};

export default usePhotos;
