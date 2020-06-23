import React, { Component } from "react";
import { Link } from "react-router-dom";
import Dashboard from "./Dashboard";
import Login from "./Login";
import styled from "styled-components";

const AdminContainer = styled.section`
  margin: 2rem 4rem;
`;

class Admin extends Component {
  render() {
    return (
      <AdminContainer>
        {!this.props.user && (<><Link to="/">To Map</Link></>)}
        <h4>Admin Page</h4>
        {this.props.user.role === "admin" ? (
          <Dashboard />
        ) : (
          <Login setUser={this.props.setUser} history={this.props.history} />
        )}
      </AdminContainer>
    );
  }
}

export default Admin;
