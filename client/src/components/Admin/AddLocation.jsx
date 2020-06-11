import React, { Component } from "react";
import axios from "axios";

class AddLocations extends Component {
  state = {
    name: "",
    address: "",
    website: "",
    bar: false,
    tapRoom: false,
    bottleShop: false,
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

  handleSubmit = (event) => {
    event.preventDefault();

    const { name, address, website, bar, tapRoom, bottleShop } = this.state;

    const addedBy = this.props.user.username

    axios
      .post("/api/locations", {
        name,
        address,
        website,
        bar,
        tapRoom,
        bottleShop,
        addedBy
      })
      .then(() => {
        this.props.history.push("/admin");
      })
      .catch((err) => {
        console.log("Error adding location", err);
      });
  };

  render() {
    return (
      <div className="container mt-3">
        <h2>Add a Location</h2>

        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Location Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              placeholder="Enter name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="bar"
              name="bar"
              checked={this.state.bar}
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
              checked={this.state.tapRoom}
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
              checked={this.state.bottleShop}
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
              value={this.state.address}
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
              value={this.state.website}
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

export default AddLocations;
