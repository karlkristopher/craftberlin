import React, { Component } from "react";
import axios from "axios";

class AddGoogleLocations extends Component {
  state = {
    name: "",
    longitude: 0,
    latitude: 0,
    address: "",
    googleMaps: "",
    website: "",
    bar: false,
    tapRoom: false,
    bottleShop: false,
  };

  handleSubmitPost = (event) => {
    event.preventDefault();

    const {
      name,
      address,
      website,
      googleMaps,
      bar,
      tapRoom,
      bottleShop,
      longitude,
      latitude,
    } = this.state;

    const addedBy = this.props.user.username;

    /*  axios
      .post("/api/locations", {
        name,
        address,
        googleMaps,
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
      }); */
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
    const {
      name,
      longitude,
      latitude,
      address,
      googleMaps,
      website,
      bar,
      tapRoom,
      bottleShop,
    } = this.state;

    return (
      <div className="container mt-3">
        <h2>Add a Google Location</h2>
        <form onSubmit={this.handleSubmit}>
        <div className="form-group">
            <input
              type="text"
              className="form-control"
              ref="input"
              placeholder="Google Search"
            />
          </div>


          <div className="form-group">
            <label htmlFor="name">Location Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              placeholder="Enter name"
              value={name}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="latitude">Coordinates (Latitude)</label>
            <input
              type="number"
              className="form-control"
              id="latitude"
              name="latitude"
              placeholder="Enter Latitude as number (N+ S-)"
              value={latitude}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="longitude">Coordinates (Longitude)</label>
            <input
              type="number"
              className="form-control"
              id="longitude"
              name="longitude"
              placeholder="Enter Longitude as number (E+ W-)"
              value={longitude}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="bar"
              name="bar"
              checked={bar}
              onChange={this.handleCheck}
            />
            <label className="form-check-label" htmlFor="bar">
              Bar?
            </label>
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="tapRoom"
              name="tapRoom"
              checked={tapRoom}
              onChange={this.handleCheck}
            />
            <label className="form-check-label" htmlFor="tapRoom">
              Tap Room?
            </label>
          </div>

          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="bottleShop"
              name="bottleShop"
              checked={bottleShop}
              onChange={this.handleCheck}
            />
            <label className="form-check-label" htmlFor="bottleShop">
              Bottle Shop?
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              name="address"
              className="form-control"
              id="address"
              placeholder="Enter address"
              value={address}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="googleMaps">Google Map Link</label>
            <input
              type="text"
              className="form-control"
              name="googleMaps"
              id="googleMaps"
              placeholder="Enter Google Maps Link"
              value={googleMaps}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="website">Website</label>
            <input
              type="text"
              className="form-control"
              name="website"
              id="website"
              placeholder="Enter website"
              value={website}
              onChange={this.handleChange}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default AddGoogleLocations;
