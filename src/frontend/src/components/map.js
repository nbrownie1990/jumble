// import mapboxgl from 'mapbox-gl'
// import React from 'react'
//
// //aktuell nicht implementiert => Codeschnipsel evtl. noch für "MapComponent" verwertbar
//
// const data = [
//   {
//     location: 'Mannhattan',
//     city: 'Brooklyn',
//     state: 'New York',
//     coordinates: [9.96292, 53.56192],
//   },
//   {
//     location: '6th Avenue',
//     city: 'Mannhatten',
//     state: 'New York',
//     coordinates: [9.962923, 53.56192],
//   },
// ]
//
// class Map extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       lng: 9.993683,
//       lat: 53.551086,
//       zoom: 12,
//     }
//   }
//
//   componentDidMount() {
//     const map = new mapboxgl.Map({
//       container: this.mapContainer,
//       style: 'mapbox://styles/nbrownie/ckur58op823es17k99ugvww0z',
//       center: [this.state.lng, this.state.lat],
//       zoom: this.state.zoom,
//     })
//
//   }
//
//   render() {
//     return (
//       <div className="card jumble-map">
//         <div
//           className="container p-0
//         "
//         >
//           <div ref={el => (this.mapContainer = el)} />
//         </div>
//       </div>
//     )
//   }
// }
//
// export default Map
//
