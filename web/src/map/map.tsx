import React from 'react';
import { Map, TileLayer, Marker } from 'react-leaflet';

const MapComponent: React.FC = () => {
  return (
    <Map center={[-22.701093, -43.531849]} zoom={13}>
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker position={[-22.701093, -43.531849]} />
    </Map>
  );
};

export default MapComponent;
