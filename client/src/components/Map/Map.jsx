import React, { Component } from "react";
import styled from "styled-components";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

//Mapbox Access Token
const mapboxToken = process.env.REACT_APP_MAPBOX;

//styles
const Marker1 = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  img {
    width: 35px;
    height: 35px;
  }
`;

const PopupBox = styled.div`
padding-top: .8rem;

h2 {
  font-size: .9rem
}

div > p {
  margin-top: 4 rem; /* Does not work */
}
p {
  font-size: .8rem;
  margin: .2rem 0rem;
  padding: 0px;
}



`;

class Map extends Component {
  state = {
    allLocations: [],
    viewport: {
      width: "100vw",
      height: "100vh",
      latitude: 52.52,
      longitude: 13.405,
      zoom: 12,
    },
    selectedLocation: null,
  };

  componentDidMount() {
    axios
      .get(`/api/locations`)
      .then((response) => {
        this.setState({ allLocations: response.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  setSelectedLocation(location) {
    this.setState({ selectedLocation: location });
  }

  render() {
    const displayMarkers = this.state.allLocations.map((location) => {
      return (
        <Marker
          latitude={location.coordinates[0]}
          longitude={location.coordinates[1]}
          key={location._id}
        >
          <Marker1
            onClick={(e) => {
              e.preventDefault();
              this.setSelectedLocation(location);
            }}
          >
            <img src="map-marker.png" alt="marker" />
          </Marker1>
        </Marker>
      );
    });

    

    return (
      <>
        <ReactMapGL
          {...this.state.viewport}
          onViewportChange={(viewport) => this.setState({ viewport })}
          mapStyle="mapbox://styles/karlsec/ckbgcwiw44z3c1impwe1yfvpc"
          mapboxApiAccessToken={mapboxToken}
        >
          {displayMarkers}
          {this.state.selectedLocation && (
            <Popup
            
              latitude={this.state.selectedLocation.coordinates[0]}
              longitude={this.state.selectedLocation.coordinates[1]}
              onClose={() => this.setState({ selectedLocation: null })}
            >
              <PopupBox>
                <h2>{this.state.selectedLocation.name}</h2>
                <p>{this.state.selectedLocation.address}</p>
                <div>
                <p><a target="_blank" href={this.state.selectedLocation.website}> Website</a></p>
                {this.state.selectedLocation.tapRoom && (<p>Tap Room ✅</p>)}
                {this.state.selectedLocation.bottleShop && (<p>Bottle Shop ✅</p>)}
                {this.state.selectedLocation.bar && (<p>Bar ✅</p>)}
                </div>
                
              </PopupBox>
            </Popup>
          )}
        </ReactMapGL>
      </>
    );
  }
}

export default Map;
