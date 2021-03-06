import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class Dashboard extends Component {
  state = {
    allLocations: [],
  };

  componentDidMount() {
    axios
      .get(`https://berlin-craft.herokuapp.com/api/locations`)
      .then((response) => {
        this.setState({ allLocations: response.data });
      })
      .catch((err) => {
        if (err.response.status === 400) {
          this.setState({ error: "Locations not found" });
        }
      });
  }

  deleteHandler() {
    axios
      .get(`https://berlin-craft.herokuapp.com/api/locations`)
      .then((response) => {
        this.setState({ allLocations: response.data });
      })
      .catch((err) => {
        if (err.response.status === 400) {
          this.setState({ error: "Locations not found" });
        }
      });
  }

  deleteItem = (event) => {
    axios
      .delete(
        `https://berlin-craft.herokuapp.com/api/locations/${event.target.value}`
      )
      .then((res) => {
        console.log("Location deleted:", res.data);
      })
      .then(() => {
        this.deleteHandler();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    const displayLocations = this.state.allLocations.map((loc) => {
      const {
        name,
        address,
        website,
        googleMaps,
        bar,
        bottleShop,
        coordinates,
        phone,
        placeId,
        rating,
        totalRatings,
        types,
        status,
        lastEdit,
        addedBy,
        openHoursText,
      } = loc;

      const displayTypes = types.map((type, i) => {
        return <li key={i}>{type}</li>;
      });

      const displayHours = openHoursText.map((ele, i) => {
        return <li key={i}>{ele}</li>;
      });

      return (
        <tr key={loc._id}>
          <th scope="row">
            <Link to={`/admin/edit/${loc._id}`}>
              <button
                // id={loc._id}
                // name={thing}
                type="button"
                value={loc._id} //not needed?
                className="btn btn-outline-info btn-sm"
              >
                Edit
              </button>
            </Link>
            <button
              // id={loc._id}
              // name={thing}
              type="button"
              value={loc._id}
              onClick={this.deleteItem}
              className="btn btn-outline-danger btn-sm"
            >
              Delete
            </button>
          </th>
          <td>{name}</td>
          <td>{placeId}</td>
          <td>
            [{coordinates[0]}, {coordinates[1]}]
          </td>
          <td>{address}</td>
          <td>{phone}</td>
          <td>
            <ul>{displayHours}</ul>
          </td>
          <td>
            <a href={googleMaps}>Link</a>
          </td>
          <td>
            {rating} ({totalRatings})
          </td>
          <td>{status}</td>
          <td>
            <a href={website}>Link</a>
          </td>
          <td>{bar ? "Yes" : "No"}</td>
          <td>{bottleShop ? "Yes" : "No"}</td>
          <td>
            <ul>{displayTypes}</ul>
          </td>
          <td>{addedBy}</td>
          <td>{lastEdit ? lastEdit : "No edits"} </td>
        </tr>
      );
    });

    return (
      <div>
        <div>
          <Link to="/admin/add">Add a Location</Link>
        </div>
        <div>
          <p>Additional fields that exist but not shown:</p>
          <ul>
            <li>Detailed Address Object</li>
            <li>
              Detailed Hours Object (for open now) + General Hours for Display
            </li>
          </ul>
        </div>
        <div className="table-responsive">
          <table className="table table-bordered  table-hover table-sm">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Change</th>
                <th scope="col">Name</th>
                <th scope="col">Google Place ID</th>
                <th scope="col">Coordinates</th>
                <th scope="col">Address</th>
                <th scope="col">Phone</th>
                <th scope="col">Hours</th>
                <th scope="col">Google Maps Link</th>
                <th scope="col">Google Rating (#)</th>
                <th scope="col">
                  Status
                  <br /> (Oper, Temp_Cls, Perm_Cls)
                </th>
                <th scope="col">Website</th>
                <th scope="col">Bar</th>
                <th scope="col">Shop</th>
                <th scope="col">Types from Google</th>
                <th scope="col">Added By</th>
                <th scope="col">Last Edited By</th>
              </tr>
            </thead>
            <tbody>
              {displayLocations.length < 1 ? (
                <tr>
                  <td>No Locations Added</td>
                </tr>
              ) : (
                displayLocations
              )}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Dashboard;
