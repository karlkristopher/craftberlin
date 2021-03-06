import React, { Component } from "react";
import { signup } from "../../services/Auth";
import "bootstrap/dist/css/bootstrap.min.css";

class SignUp extends Component {
  state = {
    username: "",
    password: "",
    message: "",
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { username, password } = this.state;

    signup(username, password).then((data) => {
      if (data.message) {
        this.setState({
          message: data.message,
          username: "",
          password: "",
        });
      } else {
        this.props.setUser(data);
        this.props.history.push("/admin");
      }
    });
  };

  render() {
    return (
      <>
        <div className="container">
          <form onSubmit={this.handleSubmit}>
            <div className="">
              <h1 className="">Sign Up</h1>
              <div className="form-group">
                <label className="">Username</label>

                <input
                  className="form-control"
                  type="text"
                  name="username"
                  value={this.state.username}
                  onChange={this.handleChange}
                  id="username"
                  placeholder="My username"
                />
              </div>

              <div className="form-group">
                <label className="">Password</label>

                <input
                  className="form-control"
                  type="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                  id="password"
                  placeholder="My password"
                />
              </div>
              <div className="">
                {this.state.message && <p>{this.state.message}</p>}
              </div>
              <div className="">
                <div className="">
                  <button
                    type="submit"
                    value="Signup"
                    className="btn btn-primary"
                  >
                    Sign up
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default SignUp;
