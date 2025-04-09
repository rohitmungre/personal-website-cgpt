import { useState, useEffect } from 'react';

const usePhotos = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const baseUrl = import.meta.env.BASE_URL || './';

    fetch(`${baseUrl}images/manifest.json`)
      .then(response => response.json())
      .then(data => {
        const updatedPhotos = data.map(photo => ({
          filename: photo.filename,
          title: photo.title,
          description: photo.description,
          thumbnail: `${baseUrl}images/thumbnails/${photo.filename}`
        }));
        setPhotos(updatedPhotos);
      })
      .catch(error => console.error('Error fetching manifest.json:', error));
  }, []);

  return photos;
};

export default usePhotos;
