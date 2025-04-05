import React, { useEffect, useRef } from 'react';
import Globe from 'react-globe.gl';
import './Travel.css';

const Travel = () => {
  const globeEl = useRef();

  const visitedPlaces = [
    { name: 'London', lat: 51.5074, lng: -0.1278 },
    { name: 'New York', lat: 40.7128, lng: -74.0060 },
    { name: 'Tokyo', lat: 35.6762, lng: 139.6503 },
    { name: 'Paris', lat: 48.8566, lng: 2.3522 },
    { name: 'Sydney', lat: -33.8688, lng: 151.2093 }
  ];

  useEffect(() => {
    if (globeEl.current) {
      globeEl.current.controls().autoRotate = true;
      globeEl.current.controls().autoRotateSpeed = 0.6;
    }
  }, []);

  return (
    <div className="travel-container">
      <Globe
        ref={globeEl}
        backgroundColor="rgba(0, 0, 0, 0)" /* Makes the background transparent */
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
        pointsData={visitedPlaces}
        pointLat="lat"
        pointLng="lng"
        pointLabel="name"
        pointColor={() => 'red'}
        pointAltitude={0.03}
        pointRadius={0.1}
      />
    </div>
  );
};

export default Travel;
