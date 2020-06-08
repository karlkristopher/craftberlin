import React, { Component } from "react";
import Dashboard from "./Dashboard";
import Login from "./Login";
import axios from "axios";

class Admin extends Component {
  componentDidMount() {
    axios
      .get("/api/auth/loggedin")
      .then((response) => {
        this.setState({
          user: response.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <>
        <h4>Admin Page</h4>
        <p>Hello {this.props.user.username}</p>
        {this.props.user.role === 'admin' ? (
          <Dashboard />
        ) : (
          <Login setUser={this.props.setUser} history={this.props.history} />
        )}
      </>
    );
  }
}

export default Admin;
