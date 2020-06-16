import React, { Component } from "react";
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
