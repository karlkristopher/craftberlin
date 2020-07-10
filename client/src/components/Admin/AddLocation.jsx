import React, { Component } from "react";
import LocationChange from "./LocationChange";
import LocationSearchInput from "./Google API/LocationSearchInput";
import axios from "axios";

class AddLocations extends Component {
  state = {
    name: "",
    longitude: 0,
    latitude: 0,
    address: "",
    addressDetail: "",
    googleMaps: "",
    website: "",
    bar: false,
    tapRoom: false,
    bottleShop: false,
    phone: "",
    openHoursText: null,
    openHoursDetail: null,
    placeId: "",
    rating: null,
    totalRatings: null,
    types: [],
    status: "",

    selectedLocation: null,
  };

  handleSubmitPost = (event) => {
    event.preventDefault();

    const {
      name,
      address,
      addressDetail,
      website,
      googleMaps,
      bar,
      tapRoom,
      bottleShop,
      longitude,
      latitude,
      phone,
      openHoursText,
      openHoursDetail,
      isOpen,
      rating,
      totalRatings,
      types,
      placeId,
      status,
    } = this.state;

    const addedBy = this.props.user.username;

    axios
      .post("/api/locations", {
        name,
        address,
        addressDetail,
        googleMaps,
        website,
        bar,
      /*   tapRoom, */
        bottleShop,
        addedBy,
        longitude,
        latitude,
        phone,
        openHoursText,
        openHoursDetail,
        isOpen,
        rating,
        totalRatings,
        types,
        placeId,
        status,
      })
      .then(() => {
        this.props.history.push("/admin");
      })
      .catch((err) => {
        console.log("Error adding location", err);
      });
  };

  handleAutocomplete = (event) => {
    this.setState(event);
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleCheck = (event) => {
    const { name, checked } = event.target;

    this.setState({
      [name]: checked,
    });
  };

  render() {
    
    return (
      <div className="container mt-3">
        <h3>Add a Location</h3>

        <LocationSearchInput
          selectedLocation={this.state.selectedLocation}
          handleAutocomplete={this.handleAutocomplete}
        />
        <LocationChange
          handleSubmit={this.handleSubmitPost}
          input={this.state}
          handleChange={this.handleChange}
          handleCheck={this.handleCheck}
        />
      </div>
    );
  }
}

export default AddLocations;
