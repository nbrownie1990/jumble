import React from 'react'
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl';

// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;

mapboxgl.accessToken = `${process.env.REACT_APP_MAPBOX}`

const jumbles = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [9.995682, 53.531086],
      },
      properties: {
        name: 'Flohschanze',
        address: 'Fake-Street 123',
        postalCode: '20005',
        openingDate: '28.02.21',
        openingTime: '10 - 16 Uhr',
        website: 'www.fakeweb.com',
        rating: 3,
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [9.996681, 53.557085],
      },
      properties: {
        name: 'Flohschanze2',
        address: 'Fake-Street 123',
        postalCode: '20005',
        openingDate: '28.02.21',
        openingTime: '10 - 16 Uhr',
        website: 'www.fakeweb.com',
        rating: 3,
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [9.993583, 53.551587],
      },
      properties: {
        name: 'Flohschanze3',
        address: 'Fake-Street 123',
        postalCode: '20005',
        openingDate: '28.02.21',
        openingTime: '10 - 16 Uhr',
        website: 'www.fakeweb.com',
        rating: 3,
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [9.992682, 53.581086],
      },
      properties: {
        name: 'SecondHand-Land',
        address: 'Fake-Street 123',
        postalCode: '20005',
        openingDate: '28.02.21',
        openingTime: '10 - 16 Uhr',
        website: 'www.fakeweb.com',
        rating: 3,
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [9.999662, 53.551016],
      },
      properties: {
        name: 'Flohschanze',
        address: 'Fake-Street 123',
        postalCode: '20005',
        openingDate: '28.02.21',
        openingTime: '10 - 16 Uhr',
        website: 'www.fakeweb.com',
        rating: 3,
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [9.923681, 53.551975],
      },
      properties: {
        name: 'Flohschanze5',
        address: 'Fake-Street 123',
        postalCode: '20005',
        openingDate: '28.02.21',
        openingTime: '10 - 16 Uhr',
        website: 'www.fakeweb.com',
        rating: 3,
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [9.923642, 53.551076],
      },
      properties: {
        name: 'Flohschanze6',
        address: 'Fake-Street 123',
        postalCode: '20005',
        openingDate: '28.02.21',
        openingTime: '10 - 16 Uhr',
        website: 'www.fakeweb.com',
        rating: 3,
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [9.994632, 53.551099],
      },
      properties: {
        name: 'Flohschanze7',
        address: 'Fake-Street 123',
        postalCode: '20005',
        openingDate: '28.02.21',
        openingTime: '10 - 16 Uhr',
        website: 'www.fakeweb.com',
        rating: 3,
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [9.983685, 53.551946],
      },
      properties: {
        name: 'Flohschanze8',
        address: 'Fake-Street 123',
        postalCode: '20005',
        openingDate: '28.02.21',
        openingTime: '10 - 16 Uhr',
        website: 'www.fakeweb.com',
        rating: 3,
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [9.997622, 53.551926],
      },
      properties: {
        name: 'FoodSharing-Point',
        address: 'Fake-Street 123',
        postalCode: '20005',
        openingDate: '28.02.21',
        openingTime: '10 - 16 Uhr',
        website: 'www.fakeweb.com',
        rating: 3,
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [9.992689, 53.551012],
      },
      properties: {
        name: 'FoodSharing-Point3',
        address: 'Fake-Street 123',
        postalCode: '20005',
        openingDate: '28.02.21',
        openingTime: '10 - 16 Uhr',
        website: 'www.fakeweb.com',
        rating: 3,
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [9.993785, 53.551082],
      },
      properties: {
        name: 'FoodSharing-Point15',
        address: 'Fake-Street 123',
        postalCode: '20005',
        openingDate: '28.02.21',
        openingTime: '10 - 16 Uhr',
        website: 'www.fakeweb.com',
        rating: 3,
      },
    },
  ],
}

class MapComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      lng: 9.993682,
      lat: 53.551086,
      zoom: 8,
    }
  }

  /**
   * Add the map to the page
   */
  componentDidMount() {
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/nbrownie/ckur58op823es17k99ugvww0z',
      center: [9.993682, 53.551086],
      zoom: 13,
      scrollZoom: false,
    })

    /**
     * Assign a unique id to each store. You'll use this `id`
     * later to associate each point on the map with a listing
     * in the sidebar.
     */
    jumbles.features.forEach((jumble, i) => {
      jumble.properties.id = i
    })

    /**
     * Wait until the map loads to make changes to the map.
     */
    map.on('load', () => {
      /**
       * This is where your '.addLayer()' used to be, instead
       * add only the source without styling a layer
       */
      map.addSource('places', {
        type: 'geojson',
        data: jumbles,
      })

      /**
       * Add all the things to the page:
       * - The location listings on the side of the page
       * - The markers onto the map
       */
      buildJumbleList(jumbles)
      addMarkers()
    })

    /**
     * Add a marker to the map for every store listing.
     **/
    function addMarkers() {
      /* For each feature in the GeoJSON object above: */
      for (const marker of jumbles.features) {
        /* Create a div element for the marker. */
        const el = document.createElement('div')
        /* Assign a unique `id` to the marker. */
        el.id = `marker-${marker.properties.id}`
        /* Assign the `marker` class to each marker for styling. */
        el.className = 'marker'

        /**
         * Create a marker using the div element
         * defined above and add it to the map.
         **/
        new mapboxgl.Marker(el, { offset: [0, -23] })
          .setLngLat(marker.geometry.coordinates)
          .addTo(map)

        /**
         * Listen to the element and when it is clicked, do three things:
         * 1. Fly to the point
         * 2. Close all other popups and display popup for clicked store
         * 3. Highlight listing in sidebar (and remove highlight for all other listings)
         **/
        el.addEventListener('click', e => {
          /* Fly to the point */
          flyToJumble(marker)
          /* Close all other popups and display popup for clicked store */
          createPopUp(marker)
          /* Highlight listing in sidebar */
          const activeItem = document.getElementsByClassName('active')
          e.stopPropagation()
          if (activeItem[0]) {
            activeItem[0].classList.remove('active')
          }
          const listing = document.getElementById(
            `listing-${marker.properties.id}`
          )
          listing.classList.add('active')
        })
      }
    }

    /**
     * Add a listing for each store to the sidebar.
     **/
    function buildJumbleList(jumbles) {
      for (const jumble of jumbles.features) {
        /* Add a new listing section to the sidebar. */
        const listings = document.getElementById('listings')
        const listing = listings.appendChild(document.createElement('div'))
        /* Assign a unique `id` to the listing. */
        listing.id = `listing-${jumble.properties.id}`
        /* Assign the `item` class to each listing for styling. */
        listing.className = 'card m-2'

        const listingBody = listing.appendChild(document.createElement('div'))
        listingBody.id = `listingBody-${jumble.properties.id}`
        listingBody.className = 'card-body'

        const listingRow = listingBody.appendChild(
          document.createElement('div')
        )
        listingRow.id = `listingRow-${jumble.properties.id}`
        listingRow.className = 'row'

        const listingCol = listingRow.appendChild(document.createElement('div'))
        listingCol.id = `listingCol-${jumble.properties.id}`
        listingCol.className = 'col-6'

        /* Add the link to the individual listing created above. */
        const link = listingCol.appendChild(document.createElement('a'))
        link.href = '#'
        link.className = 'title lead h5'
        link.id = `link-${jumble.properties.id}`
        link.innerHTML = `${jumble.properties.name}`

        /* Add details to the individual listing. */
        const details = listingCol.appendChild(document.createElement('div'))
        details.innerHTML = `${jumble.properties.address}`

        const listingCol2 = listingRow.appendChild(
          document.createElement('div')
        )
        listingCol2.id = `listingCol2-${jumble.properties.id}`
        listingCol2.className = 'col-6'

        const button = listingCol2.appendChild(document.createElement('button'))
        button.id = `button-${jumble.properties.id}`
        button.className = 'btn btn-primary m-1 float-end text-white'
        button.type = 'button'
        button.title = 'Details'
        button.innerHTML = 'Details'
    //    button.onclick = `navigate('/jumbles/${jumbleId}')`

        /**
         * Listen to the element and when it is clicked, do four things:
         * 1. Update the `currentFeature` to the store associated with the clicked link
         * 2. Fly to the point
         * 3. Close all other popups and display popup for clicked store
         * 4. Highlight listing in sidebar (and remove highlight for all other listings)
         **/
        link.addEventListener('click', function () {
          for (const feature of jumbles.features) {
            if (this.id === `link-${feature.properties.id}`) {
              flyToJumble(feature)
              createPopUp(feature)
            }
          }

          const activeItem = document.getElementsByClassName('active')
          if (activeItem[0]) {
            activeItem[0].classList.remove('active')
          }
          this.parentNode.classList.add('active')
        })
      }
    }

    /**
     * Use Mapbox GL JS's `flyTo` to move the camera smoothly
     * a given center point.
     **/
    function flyToJumble(currentFeature) {
      map.flyTo({
        center: currentFeature.geometry.coordinates,
        zoom: 15,
      })
    }

    /**
     * Create a Mapbox GL JS `Popup`.
     **/
    function createPopUp(currentFeature) {
      const popUps = document.getElementsByClassName('mapboxgl-popup')
      if (popUps[0]) popUps[0].remove()
      const popup = new mapboxgl.Popup({ closeOnClick: false })
        .setLngLat(currentFeature.geometry.coordinates)
        .setHTML(
          `<h3> ${currentFeature.properties.name}</h3><h4>${currentFeature.properties.address}</h4>`
        )
        .addTo(map)
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="container-fluid text-primary">
          <div className="card">
            <div
              id="map"
              className="map"
              ref={el => (this.mapContainer = el)}
              style={{ width: '100%', height: '50vh' }}
            />
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default MapComponent
