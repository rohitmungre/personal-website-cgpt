import { useState, useEffect } from 'react';

const useArt = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch('/art/manifest.json')
      .then(response => response.json())
      .then(data => setPhotos(data))
      .catch(error => console.error('Error fetching manifest.json:', error));
  }, []);

  return photos;
};

export default useArt;
