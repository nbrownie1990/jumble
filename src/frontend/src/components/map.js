import ReactDom from 'react-dom'
import mapboxgl from 'mapbox-gl'
import React from 'react'

//wird evtl. später ersetzt durch mapcomponent

mapboxgl.accessToken =
  'pk.eyJ1IjoibmJyb3duaWUiLCJhIjoiY2t4YTgzdHFwMGVzbDJwbXduamIwcjVobyJ9.1dvOHUtZhQCG2BBl7rkjtg'

const data = [
  {
    location: 'Mannhattan',
    city: 'Brooklyn',
    state: 'New York',
    coordinates: [9.96292, 53.56192],
  },
  {
    location: '6th Avenue',
    city: 'Mannhatten',
    state: 'New York',
    coordinates: [9.962923, 53.56192],
  },
]

class Map extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      lng: 9.993683,
      lat: 53.551086,
      zoom: 12,
    }
  }

  componentDidMount() {
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/nbrownie/ckur58op823es17k99ugvww0z',
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom,
    })

    // data.forEach(location => {
    //   console.log(location)
    //   var marker = new mapboxgl.Marker()
    //     .setLngLat(location.coordinates)
    //     .setPopup(new mapboxgl.Popup({ offset: 30 }))
    //     .setHTML('<h4>' + location.city + '</h4>' + location.location)
    //     .addTo(map)
    // })
  }

  render() {
    return (
      <div className="card jumble-map">
        <div
          className="container p-0 
        "
        >
          <div ref={el => (this.mapContainer = el)} />
        </div>
      </div>
    )
  }
}

export default Map

// let [viewport, setViewport] = useState({
//   viewport: {
//     width: window.innerWidth,
//     height: window.innerHeight,
//     latitude: 37.7577,
//     longitude: -122.4376,
//     zoom: 8,
//   },
// })

// return (
//     <ReactMapGL
//
//       {...viewport}
//       onViewportChange={newView => setViewport(newView)}
//     >
//       <Marker
//         latitude={22.8046}
//         longitude={86.20929}
//         offsetTop={(viewport.zoom * 5) / 2}
//       >
//         <img src="..." width={viewport.zoom * 5} height={viewport.zoom * 5} />
//       </Marker>
//     </ReactMapGL>
//   )
// }

// export default withRouter(connect(mapStateToProps, null) (Map));
//Oder https://github.com/endy-imamblack-deliver-app/blob/main/src/Map.js
//
