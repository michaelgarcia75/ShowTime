import React from "react";
import "./Register.css";
import { Link } from "react-router-dom";

export default class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      password_confirmation: "",
    };
    this.registerUser = this.registerUser.bind(this);
  }

  registerUser(e) {
    var axios = require("axios");
    console.log(this.state);
    var data = JSON.stringify({
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
      confirmPassword: this.state.password_confirmation,
    });

    var config = {
      method: "post",
      url: "http://localhost:3001/auth/register/",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then((response) => {
        const token = JSON.stringify(response.data.access_token);
        const userid = JSON.stringify(response.data.userId);
        console.log(JSON.stringify(response.data));
        localStorage.setItem("token", token);
        localStorage.setItem("User_id", userid);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="root">
        <div className="base-container">
          <div className="form-container sign-up-container">
            <form className="for">
              <h1>Create Account</h1>

              <span>or use your email for registration</span>

              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
            </form>{" "}
            <button>Sign Up</button>
          </div>

          <div className="form-container sign-in-container">
            <form className="for">
              <h1>Sign up</h1>
              <span>Please enter personal informations</span>
              <input
                type="text"
                name="username"
                placeholder="username"
                value={this.state.username}
                onChange={(e) => this.setState({ username: e.target.value })}
              />
              <input
                type="email"
                name="email"
                placeholder="email"
                value={this.state.email}
                onChange={(e) => this.setState({ email: e.target.value })}
              />
              <input
                type="password"
                name="password"
                placeholder="password"
                value={this.state.password}
                onChange={(e) => this.setState({ password: e.target.value })}
              />
              <input
                type="password"
                name="password_confirmation"
                placeholder="password"
                value={this.state.password_confirmation}
                onChange={(e) =>
                  this.setState({ password_confirmation: e.target.value })
                }
              />
              <button type="button" onClick={this.registerUser}>Sign Up</button>
            </form>
          </div>

          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-left">
                <h1>Welcome Back!</h1>
                <p>
                  To keep connected with us please login with your personal info
                </p>

                <button
                  type="button"
                  className="ghost"
                  onClick={this.registerUser}
                >
                  Sign Up
                </button>
              </div>
              <div className="overlay-panel overlay-right">
                <h1>Hello!</h1>
                <p>
                  Already have an account ?
                </p>{" "}
                <Link to="/login">
                  <button className="ghost">Sign In</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
