import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import "./App.css";

//Components
import ReactGA from "react-ga";
import "./components/Map/FontAwesome";
import Nav from "./components/Navbar";
import Home from "./components/Home";
// import NotFound from "./components/NotFound";
import Admin from "./components/Admin/Admin";
import SignUp from "./components/Admin/SignUp";
import AddLocations from "./components/Admin/AddLocation";
import EditLocations from "./components/Admin/EditLocation";

const GlobalStyle = createGlobalStyle`
html {
  color: '#393939';
}

body {
  padding: 0;
  margin: 1rem 0 0 0;
}
`;

ReactGA.initialize("UA-172357978-1");
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
