import { useState, useEffect } from 'react';

const useArt = () => {
  const [artworks, setArtworks] = useState([]);

  useEffect(() => {
    fetch('/art/manifest.json')
      .then(response => response.json())
      .then(data => {
        // Only load thumbnail paths in the initial fetch
        const updatedArtworks = data.map(art => ({
          filename: art.filename,
          title: art.title,
          description: art.description,
          thumbnail: `/art/thumbnails/${art.filename}`
        }));
        setArtworks(updatedArtworks);
      })
      .catch(error => console.error('Error fetching manifest.json:', error));
  }, []);

  return artworks;
};

export default useArt;
