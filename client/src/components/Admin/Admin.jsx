import React, { Component } from "react";

import axios from "axios";

class Admin extends Component {
  state = {
    user: "",
  };

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
    return <div>Admin Page</div>;
  }
}

export default Admin;
