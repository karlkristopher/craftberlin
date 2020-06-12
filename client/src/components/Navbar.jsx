import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { logout } from "../services/Auth";
import { Navbar } from "react-bootstrap";

const handleLogout = (props) => {
  logout().then(() => {
    console.log("loggedout", props);
    props.setUser(null);
  });
};

class Nav extends Component {
  render() {
    return (
      <>
        {this.props.user && (
          <Navbar>
            <Navbar.Brand href="/">Home</Navbar.Brand>
            <Navbar.Brand href="/admin">Admin</Navbar.Brand>
            <Navbar.Brand
              href="/admin"
              onClick={() => handleLogout(this.props)}
            >
              Logout
            </Navbar.Brand>
          </Navbar>
        )}
      </>
    );
  }
}

export default Nav;
