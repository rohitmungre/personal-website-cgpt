import { useState, useEffect } from 'react';

const usePhotos = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch('/images/manifest.json')
      .then(response => response.json())
      .then(data => setPhotos(data))
      .catch(error => console.error('Error fetching manifest.json:', error));
  }, []);

  return photos;
};

export default usePhotos;
