import { useState } from 'react';
import {
  GoogleMap,
  LoadScript,
  Marker,
} from '@react-google-maps/api';

const containerStyle = {
  width: '50vw',
  height: '400px',
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

const Map = () => {
  const [markers, setMarkers] = useState([]);

  const handleClick = (e) => {
    let newMarker = {
      geo: {
        lat: e.latLng.lat(),
        lng: e.latLng.lng(),
      },
      title: '',
    };
    console.log(newMarker);

    setMarkers((markers) => [...markers, newMarker]);
  };

  return (
    <LoadScript
      googleMapsApiKey='AIzaSyCcqyj8t3p_Let9hrJh7p9qwLu2y6z1dNk'
      libraries={['drawing', 'places']}
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onClick={handleClick}
      >
        {markers &&
          markers.length &&
          markers.map((marker, i) => (
            <Marker
              key={i}
              position={marker.geo}
              clickable={true}
              cursor='pointer'
            />
          ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
