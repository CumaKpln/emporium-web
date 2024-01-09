import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { useSelector } from 'react-redux';

const containerStyle = {
  maxWidth: '1250px',
  height: '400px'
};

function Location() {
  const selectedProduct = useSelector(
    (state) => state.products.selectedProduct
  );

  const [center, setCenter] = useState({ lat: 0, lng: 0 });

  useEffect(() => {

    if (selectedProduct && selectedProduct.province && selectedProduct.district && selectedProduct.neighbourhood) {
      const apiKey = 'AIzaSyD5HezO55OLorNSjAJE1Wk-te3ekpARToU'; // Google Haritalar API Anahtarınız
      const address = `${selectedProduct.province}, ${selectedProduct.district}, ${selectedProduct.neighbourhood}`;

// api keyi tırnaktan çıkar

      fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${"apiKey"}`)
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
    }
  }
    ,
    [selectedProduct]); 
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
