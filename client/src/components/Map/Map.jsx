import React from "react";
import ReactMapGL, { Marker } from "react-map-gl";

import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MapControls = styled.div`
  display: flex;
  position: absolute;
  z-index: 1;
  padding: 1.5rem 0.5rem;
  bottom: 0.7rem;
  left: 0.3rem;
`;

// const UserButton = styled.button`
//   background: none;
//   box-shadow: 0px 0px 0px transparent;
//   border: none;
//   text-shadow: 0px 0px 0px transparent;
//   :focus {
//     outline: none;
//   }
// `;

const Map = (props) => {
  // const setUserLocation = () => {
  //   navigator.geolocation.getCurrentPosition((position) => {
  //     let setNewUserLocation = {
  //       lat: position.coords.latitude,
  //       long: position.coords.longitude,
  //     };
  //     let newViewport = {
  //       height: "100vh",
  //       width: "100vw",
  //       latitude: position.coords.latitude,
  //       longitude: position.coords.longitude,
  //       zoom: 13,
  //     };
  //     props.setViewport(newViewport);
  //     props.setLocateUser(setNewUserLocation);
  //   });
  // };

  const displayLocations = props.showLocations.map((location) => (
    <Marker
      latitude={location.coordinates[0]}
      longitude={location.coordinates[1]}
      key={location._id}
      offsetLeft={-15}
      offsetTop={-15}
      className={`
        marker
        ${props.selectedLocation === location ? " active" : ""}
      `}
      name="marker"
      onClick={() => props.setSelectedLocation(location)}
    />
  ));

  return (
    <>
      <ReactMapGL
        {...props.viewport}
        onViewportChange={(viewport) => {
          props.setViewport(viewport);
        }}
        mapStyle="mapbox://styles/karlsec/ckcg9woc70wy51io0a8kv9fm0"
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX}
      >
        <MapControls>
          {/*<UserButton onClick={setUserLocation}>*/}
          {/*  <FontAwesomeIcon icon="map-marked-alt" size="lg" />*/}
          {/*</UserButton>*/}
        </MapControls>

        {/* Displays all markers */}
        {displayLocations}

        {/* Shows user pin on map */}
        {Object.keys(props.locateUser).length !== 0 && (
          <Marker
            latitude={props.locateUser.lat}
            longitude={props.locateUser.long}
            offsetLeft={-20}
            offsetTop={-40}
          >
            <FontAwesomeIcon icon="map-marker" size="2x" />
          </Marker>
        )}
      </ReactMapGL>
    </>
  );
};

export default Map;
