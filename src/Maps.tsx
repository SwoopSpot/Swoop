import React, { useState, useCallback } from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import NavBar from './NavBar';
import './stylesheets/Map.scss';

const center = {
  lat: 40.7128,
  lng: -74.006,
};

function Maps() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY!,
  });

  const [map, setMap] = useState<any>(null);

  const onLoad = useCallback(function callback(map: any) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback(map: any) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <div className='mapPageContainer'>
      <NavBar />
      <div className='mapPage'>
        <GoogleMap
          mapContainerClassName='map-container'
          center={center}
          zoom={9}
          onLoad={onLoad}
          onUnmount={onUnmount}
        >
          {/* Child components, such as markers, info windows, etc. */}
          <></>
        </GoogleMap>
      </div>
    </div>
  ) : (
    <h1>Loading...</h1>
  );
}

declare global {
  interface Window {
    Maps: () => void;
  }
}

window.Maps = Maps;

export default Maps;

// let map: google.maps.Map;

// function Maps() {
//   const loader = new Loader({
//     apiKey: 'AIzaSyAjK9unCF7OXKBDWuGQ6UBIi-lxxiov1YQ',
//     version: 'weekly',
//     // libraries: ['places'],
//   });
//   console.log('Loader made')
//   loader.load().then(() => {
//     new google.maps.Map(document.getElementById("map") as HTMLElement, {
//       center: { lat: -34.397, lng: 150.644 },
//       zoom: 8,
//     });
//   })
//   .catch(error => {
//     console.log(`${error}: an error has been caught in the promise`)
//   });
//   console.log('Loader finished promises')
//   const mapOptions = {
//     center: {
//       lat: 0,
//       lng: 0,
//     },
//     zoom: 4,
//   };
//   console.log('map options made')

//   return (
//     <div>
//       <h1>HELLO</h1>
//       <div id='map'>
//       </div>
//     </div>

//   )
// }
