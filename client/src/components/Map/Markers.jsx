import * as React from "react";
import { PureComponent } from "react";
import { Marker } from "react-map-gl";
import styled from "styled-components";

const Marker1 = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  img {
    width: 35px;
    height: 35px;
  }
`;

export default class Markers extends PureComponent {
  render() {
    const { locations, setSelectedLocation } = this.props;
   

    return locations.map((location) => (
      <Marker
        latitude={location.coordinates[0]}
        longitude={location.coordinates[1]}
        key={location._id}
      >
        <Marker1
          onClick={(e) => {
            e.preventDefault();
            setSelectedLocation(location);
          }}
        >
          <img src="map-marker.png" alt="marker" />
        </Marker1>
      </Marker>
    ));
  }
}
