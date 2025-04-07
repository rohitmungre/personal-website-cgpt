import React, { useCallback, useRef } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const mapContainerStyle = {
  width: '100%',
  height: '500px'
};

const center = {
  lat: 20.5937, // Center of the world map
  lng: 78.9629
};

const places = [
  { name: "London", position: { lat: 51.5074, lng: -0.1278 } },
  { name: "Paris", position: { lat: 48.8566, lng: 2.3522 } },
  { name: "New York", position: { lat: 40.7128, lng: -74.0060 } }
];

const Travel = () => {
  const mapRef = useRef(null);

  const onLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  return (
    <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={2}
        onLoad={onLoad}
      >
        {places.map((place, index) => (
          <Marker key={index} position={place.position} title={place.name} />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default Travel;
