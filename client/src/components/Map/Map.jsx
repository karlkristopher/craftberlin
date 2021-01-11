import React, { Component } from "react";
import ReactMapGL, { Popup, Marker } from "react-map-gl";
/* import moment from 'moment'; */
import moment from "moment-timezone";
import styled from "styled-components";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LocationInfo from "./LocationInfo";
import Markers from "./Markers";

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

    //Time of User will be set to Berlin Time
    userTime: {
      moment: undefined,
      year: null,
      month: null,
      day: null,
      hours: null,
      minutes: null,
    },
  };

  componentDidMount() {
    axios
      .get(`https://berlin-craft.herokuapp.com/api/locations`)
      .then((response) => {
        this.setState({ allLocations: response.data });
      })
      .catch((err) => {
        console.log(err);
      });

    // Below is under construction for an "Open Now" button.
    this.setState({
      userTime: {
        moment: moment.tz("Europe/Berlin"),
        year: moment.tz("Europe/Berlin").year(),
        month: moment.tz("Europe/Berlin").month(),
        day: moment.tz("Europe/Berlin").day(),
        /*         hours: moment.tz("Europe/Berlin").hour(),
        minutes: moment.tz("Europe/Berlin").minute(), */
      },
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
    const { allLocations, viewport, userLocation, userTime } = this.state;
    const { barCheck, bottleShopCheck, tapRoomCheck } = this.props;

    // Below is under construction for an "Open Now" button.
    // const openCheck = (location) => {
    //   let isOpen = false;
    //   let dayPassed = false;

    //   let hours = location.openHoursDetail;

    //   for (
    //     let i = 0;
    //     i < hours.length && dayPassed === false && isOpen === false;
    //     i++
    //   ) {
    //     /*    console.log(  userTime.year,
    //       userTime.month,
    //       hours[i].open.day,
    //       hours[i].open.hours,
    //       hours[i].open.minutes); */
    //     console.log(
    //       userTime.year,
    //       userTime.month,
    //       hours[i].close.day,
    //       hours[i].close.hours,
    //       hours[i].close.minutes
    //     );

    //     if (userTime.day < hours[i].open.day) {
    //       dayPassed = true;
    //     }

    //     console.log(
    //       moment([
    //         userTime.year,
    //         userTime.month,
    //         hours[i].close.day,
    //         hours[i].close.hours,
    //         hours[i].close.minutes,
    //       ])
    //     );

    //     if (
    //       moment.tz("Europe/Berlin").isBetween(
    //         moment([
    //           userTime.year,
    //           userTime.month,
    //           hours[i].open.day,
    //           hours[i].open.hours,
    //           hours[i].open.minutes,
    //         ]),

    //         moment([
    //           userTime.year,
    //           userTime.month,
    //           hours[i].close.day,
    //           hours[i].close.hours,
    //           hours[i].close.minutes,
    //         ])
    //       )
    //     ) {
    //       isOpen = true;
    //     }
    //   }

    //   return isOpen;
    // };

    const displayMarkers = allLocations.filter((location) => {
      /*       if (!openCheck(location) && showOpen) return false;
       */ if (!barCheck && !bottleShopCheck && !tapRoomCheck) return true;
      if (!location.bar && barCheck && bottleShopCheck) return false;
      if (!location.bottleShop && barCheck && bottleShopCheck) return false;
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
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX}
        >
          <MapControls>
            <UserButton onClick={this.setUserLocation}>
              <FontAwesomeIcon icon="map-marked-alt" size="lg" />
            </UserButton>
          </MapControls>

          {/* Displays all Markers */}
          <Markers
            title="markerList"
            locations={displayMarkers}
            setSelectedLocation={this.setSelectedLocation}
            userTime={userTime}
          />

          {/* Shows User Pin on Map */}
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
          {/* Shows Location Data on Click */}
          {this.renderPopup()}
        </ReactMapGL>
      </>
    );
  }
}

export default Map;
