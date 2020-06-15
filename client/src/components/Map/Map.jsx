import React, { Component } from "react";
import styled from "styled-components";
import mapboxgl from "mapbox-gl";
import dotenv from 'dotenv'
dotenv.config()

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX

const MapBox = styled.div`
  background-color: purple;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
`;

class Map extends Component {
  state = {
    lng: 13.4050,
    lat: 52.5200,
    zoom: 11,
  };

  componentDidMount() {
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom,
    });
  }

  render() {
    console.log(this.state)
    return (
      <MapBox ref={(el) => (this.mapContainer = el)}>Map Component</MapBox>
    );
  }
}

export default Map;
