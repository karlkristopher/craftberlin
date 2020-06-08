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
  state = {
    user: "",
  };

  setUser = (user) => {
    this.setState({
      user: user,
    });
  };

  render() {
    console.log(this.state.user)
    return (
      <>
        <Navbar user={this.state.user} />
        <Switch>
          <Route
            exact
            path="/admin"
            render={(props) => {
              return <Admin user={this.state.user} setUser={this.setUser} {...props} />;
            }}
          />

          <Route
            exact
            path="/admin/create"
            render={(props) => {
              return <SignUp setUser={this.setUser} {...props} />;
            }}
          />
          <Route exact path="/" component={Home} />
          <Route exact path="/:notfound" component={NotFound} />
        </Switch>
      </>
    );
  }
}

export default App;
