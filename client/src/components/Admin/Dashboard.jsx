import React, { Component } from "react";
import { Link } from "react-router-dom";


class Dashboard extends Component {
  state = {  }
  render() { 
    return ( <div>
      This is the Dashboard
      <Link to="/admin/add">Add a Location</Link>
    </div> );
  }
}
 
export default Dashboard;