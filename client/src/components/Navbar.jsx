import React, { Component } from "react";
import { Link } from "react-router-dom";
import { logout } from "../services/Auth";

const handleLogout = (props) => {
  logout().then(() => {
    console.log("loggedout", props);
    props.setUser(null);
  });
};

class Navbar extends Component {
  render() {
    return (
      <div>
        NavBar
        <Link to="/">Home</Link>
        {this.props.user && (
          <>
            <Link to="/admin">Admin</Link>
            <a
              className="button negative"
              href="/admin"
              onClick={() => handleLogout(this.props)}
            >
              Logout
            </a>
          </>
        )}
      </div>
    );
  }
}

export default Navbar;
