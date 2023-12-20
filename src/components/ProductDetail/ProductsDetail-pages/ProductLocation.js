import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import data from "../../../data/db.json";

const containerStyle = {
  maxWidth: '1250px',
  height: '400px'
};

function Location() {
  const [center, setCenter] = useState({ lat: 0, lng: 0 });
  const targetId = 1; // Hedeflenen ID değeri

  useEffect(() => {
    if (data['ilan-ver'] && Array.isArray(data['ilan-ver']) && data['ilan-ver'].length > 0) {
      const targetData = data['ilan-ver'].find(item => item.id === targetId);

      if (targetData && targetData.province && targetData.district && targetData.neighbourhood) {
        const apiKey = 'AIzaSyD5HezO55OLorNSjAJE1Wk-te3ekpARToU'; // Google Haritalar API Anahtarınız
        const address = `${targetData.province}, ${targetData.district}, ${targetData.neighbourhood}`;

        fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${apiKey}`)
          .then((response) => response.json())
          .then((result) => {
            if (result && result.results && result.results[0] && result.results[0].geometry && result.results[0].geometry.location) {
              const coordinates = result.results[0].geometry.location;
              setCenter({ lat: coordinates.lat, lng: coordinates.lng });
            }
          })
          .catch((error) => {
            console.error('Error:', error);
          });
        }console.log(targetData)
      }
  }, [targetId]);
console.log(targetId ,"targetId")
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyD5HezO55OLorNSjAJE1Wk-te3ekpARToU" // API anahtarınızı buraya girin
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        {/* Marker component */}
        <Marker
          position={center}
        />
      </GoogleMap>
    </LoadScript>
  );
}

export default Location;
