import React, { Component } from "react";
import ReactMapGL, { Popup, Marker } from "react-map-gl";
import styled from "styled-components";
import axios from "axios";
import dotenv from "dotenv";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LocationInfo from "./LocationInfo";
import Markers from "./Markers";
dotenv.config();

//Mapbox Access Token
const mapboxToken = process.env.REACT_APP_MAPBOX;

const MapControls = styled.div`
  display: flex;
  position: fixed;
  z-index: 1;
  padding: 1.5rem 0.5rem;
  bottom: 0.7rem;
  left: 0.3rem;
`;

const UserButton = styled.button`
  background: none;
  box-shadow: 0px 0px 0px transparent;
  border: none;
  text-shadow: 0px 0px 0px transparent;
  :focus {
    outline: none; 
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
      zoom: 11,
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
    const { allLocations, viewport, userLocation } = this.state;
    const { barCheck, bottleShopCheck, tapRoomCheck } = this.props;
    const displayMarkers = allLocations.filter((location) => {
      if (!barCheck && !bottleShopCheck && !tapRoomCheck) return true;
      if (!location.bar && (barCheck && bottleShopCheck)) return false;
      if (!location.bottleShop && (barCheck && bottleShopCheck)) return false;
      if (location.bar && barCheck) return true;
      if (location.bottleShop && bottleShopCheck) return true;
      return false;
    });

    return (
      <>
        <ReactMapGL
          {...viewport}
          onViewportChange={(viewport) => this.setState({ viewport })}
          mapStyle="mapbox://styles/karlsec/ckcg9woc70wy51io0a8kv9fm0"
          mapboxApiAccessToken={mapboxToken}
        >
          <MapControls>
            <UserButton onClick={this.setUserLocation}>
              <FontAwesomeIcon icon="map-marked-alt" size="lg" />
            </UserButton>
          </MapControls>
          <Markers
            locations={displayMarkers}
            setSelectedLocation={this.setSelectedLocation}
          />
          {Object.keys(userLocation).length !== 0 && (
            <Marker
              latitude={userLocation.lat}
              longitude={userLocation.long}
              offsetLeft={-20}
              offsetTop={-40}
            >
              <FontAwesomeIcon icon="map-marker" size="2x" />
            </Marker>
          )}

          {this.renderPopup()}
        </ReactMapGL>
      </>
    );
  }
}

export default Map;
