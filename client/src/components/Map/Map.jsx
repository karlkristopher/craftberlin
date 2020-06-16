import React, { Component } from "react";
import ReactMapGL, { Popup } from "react-map-gl";
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

  renderPopup() {
    const { selectedLocation } = this.state;
    return (
      selectedLocation && (
        <Popup
          closeOnClick={false}
          tipSize={5}
          latitude={this.state.selectedLocation.coordinates[0]}
          longitude={this.state.selectedLocation.coordinates[1]}
          onClose={() => this.setState({ selectedLocation: null })}
        >
          <LocationInfo info={selectedLocation} />
        </Popup>
      )
    );
  }

  render() {
    const { allLocations } = this.state;
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
          {...this.state.viewport}
          onViewportChange={(viewport) => this.setState({ viewport })}
          mapStyle="mapbox://styles/karlsec/ckbgcwiw44z3c1impwe1yfvpc"
          mapboxApiAccessToken={mapboxToken}
        >
          <Markers
            locations={displayMarkers}
            setSelectedLocation={this.setSelectedLocation}
          />

          {this.renderPopup()}
        </ReactMapGL>
      </>
    );
  }
}

export default Map;
