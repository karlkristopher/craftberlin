import React, { Component } from "react";
import LocationChange from "./LocationChange";
import axios from "axios";


class AddLocations extends Component {
  state = {
    name: "",
    longitude: 0,
    latitude: 0,
    address: "",
    website: "",
    bar: false,
    tapRoom: false,
    bottleShop: false,
  };

  handleSubmitPost = (event) => {
    event.preventDefault();

    const { name, address, website, bar, tapRoom, bottleShop, longitude, latitude } = this.state;

    const addedBy = this.props.user.username

    axios
      .post("/api/locations", {
        name,
        address,
        website,
        bar,
        tapRoom,
        bottleShop,
        addedBy,
        longitude,
        latitude
      })
      .then(() => {
        this.props.history.push("/admin");
      })
      .catch((err) => {
        console.log("Error adding location", err);
      });
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
    console.log(this.state)
    return (
      <div className="container mt-3">
        <h2>Add a Location</h2>
        <LocationChange
          handleSubmit={this.handleSubmitPost} input={this.state} handleChange={this.handleChange} handleCheck={this.handleCheck}
        />
      </div>
    );
  }
}

export default AddLocations;

