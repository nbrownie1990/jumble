import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder'

const getNewGeocoder = mapboxInstance => {
  const geocoder = new MapboxGeocoder({
    accessToken: mapboxInstance.accessToken, // Set the access token
    mapbox: mapboxInstance, // Set the mapbox-gl instance
    marker: true, // Use the geocoder's default marker style
    bbox: [-77.210763, 38.803367, -76.853675, 39.052643], // Set the bounding box coordinates
  })

  return geocoder
}

export { getNewGeocoder }
