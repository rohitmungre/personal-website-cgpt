import { useState, useEffect } from 'react';

const useArt = () => {
  const [artworks, setArtworks] = useState([]);

  useEffect(() => {
    const baseUrl = import.meta.env.BASE_URL || './'; // works with Vite
    fetch(`${baseUrl}art/manifest.json`)
      .then(response => response.json())
      .then(data => {
        const updatedArtworks = data.map(art => ({
          filename: art.filename,
          title: art.title,
          description: art.description,
          thumbnail: `${baseUrl}art/thumbnails/${art.filename}`
        }));
        setArtworks(updatedArtworks);
      })
      .catch(error => console.error('Error fetching manifest.json:', error));
  }, []);

  return artworks;
};

export default useArt;