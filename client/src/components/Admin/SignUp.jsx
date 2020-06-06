import React, {Component} from 'react'
import 'bulma/css/bulma.css'
import { signup } from "../../services/Auth"



class SignUp extends Component {
  state = { 
    username: "",
    password: "",
    message: "",
   }

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
     //   this.props.setUser(data); //NEEDS TO BE UPDATED
        this.props.history.push("/admin");
      }
    });
  };

  render() {
    return (
      <>
        <div className="auth-container">
          <form onSubmit={this.handleSubmit}>
            <div className="field input-form">
   
              <h1 className="title is-1 is-size-3-mobile">Sign Up</h1>
              <div className="field">
                <label className="label">Username</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    name="username"
                    value={this.state.username}
                    onChange={this.handleChange}
                    id="username"
                    placeholder="My username"
                  />
                </div>
              </div>

              <div className="field">
                <label className="label">Password</label>
                <div className="control">
                  <input
                    className="input"
                    type="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    id="password"
                    placeholder="My password"
                  />
                </div>
              </div>
              <div className="notice">
                {this.state.message && <p>{this.state.message}</p>}
              </div>
              <div className="field button-group">
                <div className="control">
                  <button
                    type="submit"
                    value="Signup"
                    class="button positive"
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
