import React from "react";
import logo from "../logo_ticket_tac.png";
import bcrypt from 'bcryptjs';

export default class updateUsers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.updateUser = this.updateUser.bind(this);
    this.handleChangeAdmin = this.handleChangeAdmin.bind(this);
  }

  handleChangeAdmin(e) {
    this.setState({ is_admin: e.target.checked });
  }

  updateUser(e) {
    var axios = require("axios");

    var data = JSON.stringify({
      username: this.state.username,
      email: this.state.email,
      password: this.state.password ? bcrypt.hashSync(this.state.password) : undefined,
      is_admin: this.state.is_admin,
    });
    const id = this.props.match.params._id;
    console.log(typeof id);
    var config = {
      method: "patch",
      url: "http://localhost:3001/users/" + id,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        console.log(data);
        this.props.history.push(`/users`);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  componentDidMount() {
    var axios = require("axios");

    const id = this.props.match.params._id;
    var config = {
      method: "get",
      url: "http://localhost:3001/users/" + id,
      headers: {
        "Content-Type": "application/json",
      },
    };

    axios(config)
      .then((response) => {
        this.setState({ is_admin: response.data.is_admin });
        console.log(response.data.is_admin);
      })
      .catch(function (error) {
        console.log(error);
      });

  }
  render() {
    return (
      <div>
        <div class="ml-64 w-72">
          <a href="/">
            <img src={logo} className="App-logo" alt="logo" title="Accueil" />
          </a>
        </div>
        <div class="ml-64 flex flex-col space-y-4 mt-12 text-lg">
          <label>
            Username :
            <input
              class="border-2 border-black rounded-lg ml-20 h-10 pl-2"
              type="text"
              value={this.state.username}
              onChange={(e) => this.setState({ username: e.target.value })}
              placeholder="Vide si non modifié"
            />
          </label>
          <label>
            Mot de passe :
            <input
              class="border-2 border-black rounded-lg ml-12 h-10 pl-2"
              type="password"
              value={this.state.password}
              onChange={(e) => this.setState({ password: e.target.value })}
              placeholder="OBLIGATOIRE"
            />
          </label>
          <label>
            Email :
            <input
              class="border-2 border-black rounded-lg ml-28 h-10 pl-2"
              type="email"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
              placeholder="Vide si non modifié"
            />
          </label>
          <label>
            Admin :
            <input
              name="isAdmin"
              type="checkbox"
              checked={this.state.is_admin}
              onChange={this.handleChangeAdmin} />
          </label>
          {/* <a href="/users"> */}
          <button class="text-red-700 font-bold text-2xl hover:underline" value="Envoyer" method="post" onClick={this.updateUser}>
            Envoyer
          </button>
          {/* </a> */}
        </div>
      </div>
    );
  }
}
