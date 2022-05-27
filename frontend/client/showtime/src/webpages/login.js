import React from "react";
import "./login.css";
import { Link } from "react-router-dom";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.loginUser = this.loginUser.bind(this);
  }

  loginUser(e) {
    var axios = require("axios");
    var data = JSON.stringify({
      email: this.state.email,
      password: this.state.password,
    });

    var config = {
      method: "post",
      url: "http://localhost:3001/auth/login/",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then((response) => {
        const token = JSON.stringify(response.data.access_token).slice(1, -1);
        const userid = JSON.stringify(response.data.userId).slice(1, -1);
        const is_admin = JSON.stringify(response.data.is_admin);

        console.log(JSON.stringify(response.data));

        if (is_admin !== "false") {
          this.props.history.push("/page_admin");
        } else {
          this.props.history.push("/");
        }

        localStorage.setItem("token", token);
        localStorage.setItem("User_id", userid);
        localStorage.setItem("is_admin", is_admin);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="root">
        <div className="base-container" id="container">
          <div className="form-container sign-up-container">
            <form className="for">
              <h1>Create Account</h1>

              <span>or use your email for registration</span>
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
            </form>{" "}
            <button>Sign In</button>
          </div>
          <div className="form-container sign-in-container">
            <form className="for">
              <h1>Sign In</h1>
              <p>Enter your personal details and start journey with us</p>{" "}
              <input
                type="email"
                placeholder="Email"
                onChange={(e) => this.setState({ email: e.target.value })}
                value={this.state.email}
              />
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => this.setState({ password: e.target.value })}
                value={this.state.password}
              />
              <button onClick={this.loginUser} type="button">
                Sign In
              </button>
            </form>
          </div>
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-left">
                <h1>Welcome Back!</h1>
                <p>
                  To keep connected with us please login with your personal info
                </p>

                <button className="ghost">Sign In</button>
              </div>
              <div className="overlay-panel overlay-right">
                <h1>Don't have an account ?</h1>

                <Link to="./register">
                  {" "}
                  <button className="ghost">Sign Up</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
