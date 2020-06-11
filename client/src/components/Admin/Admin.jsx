import React, { Component } from "react";
import Dashboard from "./Dashboard";
import Login from "./Login";

class Admin extends Component {

  render() {
    return (
      <>
        <h4>Admin Page</h4>

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
