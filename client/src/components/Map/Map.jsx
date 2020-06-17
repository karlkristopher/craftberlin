import React, { Component } from "react";
import ReactMapGL, { Popup, Marker } from "react-map-gl";
import axios from "axios";
import dotenv from "dotenv";
import LocationInfo from "./LocationInfo";
import Markers from "./Markers";
dotenv.config();

//Mapbox Access Token
const mapboxToken = process.env.REACT_APP_MAPBOX;

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
    userLocation: {},
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

  setSelectedLocation = (location) => {
    this.setState({ selectedLocation: location });
  };

  setUserLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let setUserLocation = {
        lat: position.coords.latitude,
        long: position.coords.longitude,
      };
      let newViewport = {
        height: "100vh",
        width: "100vw",
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        zoom: 13,
      };
      this.setState({
        viewport: newViewport,
        userLocation: setUserLocation,
      });
    });
  };

  renderPopup() {
    const { selectedLocation } = this.state;
    return (
      selectedLocation && (
        <Popup
          closeOnClick={false}
          tipSize={5}
          latitude={selectedLocation.coordinates[0]}
          longitude={selectedLocation.coordinates[1]}
          onClose={() => this.setState({ selectedLocation: null })}
        >
          <LocationInfo info={selectedLocation} />
        </Popup>
      )
    );
  }

  render() {

    console.log(navigator.geolocation)
    const { allLocations, viewport, userLocation } = this.state;
    const { barCheck, bottleShopCheck, tapRoomCheck } = this.props;
    const displayMarkers = allLocations.filter((location) => {
      if (location.bar && barCheck) return true;
      if (location.tapRoom && tapRoomCheck) return true;
      if (location.bottleShop && bottleShopCheck) return true;
      return false;
    });

    return (
      <>
      
        <ReactMapGL
          {...viewport}
          onViewportChange={(viewport) => this.setState({ viewport })}
          mapStyle="mapbox://styles/karlsec/ckbgcwiw44z3c1impwe1yfvpc"
          mapboxApiAccessToken={mapboxToken}
        >
          <button onClick={this.setUserLocation}>My Location</button>
          <Markers
            locations={displayMarkers}
            setSelectedLocation={this.setSelectedLocation}
          />
          {Object.keys(userLocation).length !== 0 && (
            <Marker
              latitude={userLocation.lat}
              longitude={userLocation.long}
            >
              <img style={{width: "2rem"}} src="user-point.png" alt="marker" />
            </Marker>
          )}

          {this.renderPopup()}
        </ReactMapGL>
      </>
    );
  }
}

export default Map;
