import React, { Component } from 'react'
// import ReactMapGL,{Marker} from 'react-map-gl';
// import {withRouter} from 'react-router-dom'
// import {connect} from 'react-redux'
// import {GoLocation} from 'react-icons/go'

// const mapStateToProps = (state) => state;

class Map extends Component {
  //   state = {
  //     viewport: {
  //       width: "100%",
  //     //   height: "100vh",
  //       latitude: 6.5236,
  //       longitude: 3.6006,
  //       zoom: 8
  //     }
  //   };

  render() {
    return (
      <article className="bg-info py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="text-center text-white">
            <h1 className="display-4 fw-bolder">Map Container</h1>
            <p className="lead fw-normal text-white-50 mb-0">
              A placeholder for Mapbox API
            </p>
          </div>
        </div>
      </article>
      //     <ReactMapGL
      //         {...this.state.viewport}
      //         mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      //         mapStyle={"mapbox://styles/"}
      //         onViewportChange={(viewport) => this.setState({viewport})}
      //       >
      //           <GoLocation style={{color: "white"}}/>

      //       </ReactMapGL>
    )
  }
}
export default Map
// export default withRouter(connect(mapStateToProps, null) (Map));

//Oder https://github.com/endy-imam/black-deliver-app/blob/main/src/Map.js
