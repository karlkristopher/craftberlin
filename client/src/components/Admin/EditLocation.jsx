import React, { Component } from "react";
import LocationChange from "./LocationChange";
import axios from "axios";


class EditLocations extends Component {
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
    status: [],
    phone: "",
    status: "",
    types: [],
  };

  componentDidMount(){
    const id = this.props.match.params.id
    axios
      .get(`/api/locations/${id}`)
      .then((response) => {
        const {name, bar, address, googleMaps, coordinates, tapRoom, bottleShop, website, types, status, phone } = response.data
        this.setState({ name, bar, address, googleMaps, latitude: coordinates[0], longitude: coordinates[1], tapRoom, bottleShop, website,  types, status, phone});
      })
      .catch((err) => {
        if (err.response.status === 400) {
          this.setState({ error: "Locations not found" });
        }
      });

  }

  handleSubmitEdit = (event) => {
    event.preventDefault();

    const { name, address, website, googleMaps, bar, tapRoom, bottleShop, longitude, latitude } = this.state;

    const lastEdit = this.props.user.username

    const id = this.props.match.params.id;
    axios
      .put(`/api/locations/${id}`, {
        name,
        address,
        googleMaps,
        website,
        bar,
        tapRoom,
        bottleShop,
        lastEdit,
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
    console.log(this.state.types)
    return (
      <div className="container mt-3">
        <h3>Edit Location</h3>
        <LocationChange
          handleSubmit={this.handleSubmitEdit} input={this.state} handleChange={this.handleChange} handleCheck={this.handleCheck}
        />
      </div>
    );
  }
}

export default EditLocations;
