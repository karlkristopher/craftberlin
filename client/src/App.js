import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

//Components
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import Admin from "./components/Admin/Admin";
import SignUp from "./components/Admin/SignUp";

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Switch>
          <Route exact path="/admin" component={Admin} />
          <Route exact path="/admin/create" component={SignUp} />
          <Route exact path="/" component={Home} />
          <Route exact path="/:notfound" component={NotFound} />
        </Switch>
      </>
    );
  }
}

export default App;
