import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import "./App.css";

//Components
import "./components/Map/FontAwesome";
import AddLocations from "./components/Admin/AddLocation";
import Admin from "./components/Admin/Admin";
import EditLocations from "./components/Admin/EditLocation";
import Home from "./components/Home";
import Nav from "./components/Navbar";
import ReactGA from "react-ga";
import SignUp from "./components/Admin/SignUp";

const GlobalStyle = createGlobalStyle``;

ReactGA.initialize(process.env.REACT_APP_REACTGA);

ReactGA.pageview(window.location.pathname + window.location.search);

class App extends Component {
  state = {
    user: this.props.user,
  };

  setUser = (user) => {
    this.setState({
      user: user,
    });
  };

  render() {
    return (
      <>
        <GlobalStyle />
        <Nav user={this.state.user} />
        <Switch>
          <Route
            exact
            path="/admin"
            render={(props) => {
              return (
                <Admin
                  user={this.state.user}
                  setUser={this.setUser}
                  {...props}
                />
              );
            }}
          />
          <Route
            exact
            path="/admin/add"
            render={(props) => {
              if (this.state.user.role === "admin") {
                return (
                  <AddLocations
                    user={this.state.user}
                    setUser={this.setUser}
                    {...props}
                  />
                );
              } else {
                return <Redirect to="/" />;
              }
            }}
          />
          <Route
            exact
            path="/admin/edit/:id"
            render={(props) => {
              if (this.state.user.role === "admin") {
                return (
                  <EditLocations
                    user={this.state.user}
                    setUser={this.setUser}
                    // submitPost={this.handleSubmitPost}
                    {...props}
                  />
                );
              } else {
                return <Redirect to="/" />;
              }
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
          <Route exact path="/:notfound" render={() => <Redirect to="/" />} />
        </Switch>
      </>
    );
  }
}

export default App;
