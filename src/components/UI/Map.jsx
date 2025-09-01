import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import "Leaflet/dist/leaflet.css"

const MyMap = () => {
  const position = [51.505, -0.09]; // Example coordinates

  return (
    <MapContainer center={position} zoom={13} style={{ height: '100%', width: '100%' }}>
      <TileLayer
        attribution="&copy; OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>Welcome to this location!</Popup>
      </Marker>
    </MapContainer>
  );
};

export default MyMap;
