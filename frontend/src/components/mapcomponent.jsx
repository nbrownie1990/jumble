import ReactDom from 'react-dom'
import mapboxgl from 'mapbox-gl'
import React from 'react'
import Star from '../components/common/rating'
import SearchBar from '../components/searchbar'

mapboxgl.accessToken =
  'pk.eyJ1IjoibmJyb3duaWUiLCJhIjoiY2t1aWVhNGhlMDJrZjMwcXoyZWUybDYxZCJ9.HLXmIOmvZtR3uhDR1JofjA'

const jumbles = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-77.034084142948, 38.909671288923],
      },
      properties: {
        name: 'Flohschanze',
        category: {
          _id: '5b21ca3eeb7f6fbccd471878',
          categoryname: 'Flea Markets',
        },
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
        coordinates: [-77.049766, 38.900772],
      },
      properties: {
        name: 'Bibi-Land',
        category: {
          _id: '5b21ca3eeb7f6fbccd471818',
          categoryname: 'Flea Markets',
        },
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
        coordinates: [-77.043929, 38.910525],
      },
      properties: {
        name: 'Lulu-Land',
        category: {
          _id: '5b21ca3eeb7f6fbccd471819',
          categoryname: 'Flea Markets',
        },
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
        coordinates: [-77.0672, 38.90516896],
      },
      properties: {
        name: 'Lego-Land',
        category: {
          _id: '1b21ca3eeb7f6fbccd471818',
          categoryname: 'Flea Markets',
        },
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
        coordinates: [-77.002583742142, 38.887041080933],
      },
      properties: {
        name: 'Lili-Land',
        category: {
          _id: '3b21ca3eeb7f6fbccd471818',
          categoryname: 'Flea Markets',
        },
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
        coordinates: [-76.933492720127, 38.99225245786],
      },
      properties: {
        name: 'Lou-Land',
        category: {
          _id: '2b21ca3eeb7f6fbccd471818',
          categoryname: 'Flea Markets',
        },
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
        coordinates: [-77.097083330154, 38.980979],
      },
      properties: {
        name: 'Live-Land',
        category: {
          _id: '4b21ca3eeb7f6fbccd471818',
          categoryname: 'Flea Markets',
        },
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
        coordinates: [-77.359425054188, 38.958058116661],
      },
      properties: {
        name: 'Leio-Land',
        category: {
          _id: '7h21ca3eeb7f6fbccd471818',
          categoryname: 'Flea Markets',
        },
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
        coordinates: [-77.10853099823, 38.880100922392],
      },
      properties: {
        name: 'Papa-Land',
        category: {
          _id: '9b21ca3eeb7f6fbccd471818',
          categoryname: 'Flea Markets',
        },
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
        coordinates: [-75.28784, 40.008008],
      },
      properties: {
        name: 'Liop-Land',
        category: {
          _id: '8b21ca3eeb7f6fbccd471818',
          categoryname: 'Flea Markets',
        },
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
        coordinates: [-75.20121216774, 39.954030175164],
      },
      properties: {
        name: 'Uff-Land',
        category: {
          _id: '7b21ca3eeb7f6fbccd471818',
          categoryname: 'Flea Markets',
        },
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
        coordinates: [-77.043959498405, 38.903883387232],
      },
      properties: {
        name: 'Lele-Land',
        category: {
          _id: '6b21ca3eeb7f6fbccd471818',
          categoryname: 'Flea Markets',
        },
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
      center: [-77.034084142948, 38.909671288923],
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
        <div className="container-fluid text-primary" data-aos="fade-up">
          <div className="card h-100">
            <div
              id="map"
              className="map"
              ref={el => (this.mapContainer = el)}
              style={{ width: '100%', height: '50vh' }}
            />
          </div>
          <div className="card h-100">
            <SearchBar />
            <div className="sidebar scroll-list card-body p-4 text-start ">
              <div className="heading">
                <h1>Jumbles:</h1>
              </div>
              <div id="listings" className="listings"></div>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default MapComponent
