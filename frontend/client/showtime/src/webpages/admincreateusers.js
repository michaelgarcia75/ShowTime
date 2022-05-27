import React from "react";
import logo from "../logo_ticket_tac.png";

export default class createUsers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      is_admin: "",
    };

    this.postRegister = this.postRegister.bind(this);
  }

  postRegister() {
    var axios = require("axios");
    var data = JSON.stringify({
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
      is_admin: this.state.is_admin,
    });

    var config = {
      method: "post",
      url: "http://localhost:3001/users/",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        console.log(data);
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
        <div class="flex flex-col ml-64 mt-10 text-xl space-y-4">
          <label>
            Utilisateur :
            <input
              class="border-2 border-black rounded-lg ml-16 h-10 pl-2"
              type="text"
              value={this.state.username}
              onChange={(e) => this.setState({ username: e.target.value })}
            />
          </label>
          <label>
            Mot de passe :
            <input
              class="border-2 border-black rounded-lg ml-12 h-10 pl-2"
              type="text"
              value={this.state.password}
              onChange={(e) => this.setState({ password: e.target.value })}
            />
          </label>
          <label>
            Email :
            <input
              class="border-2 border-black rounded-lg ml-28 h-10 pl-2"
              type="email"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </label>
          <label>
            Admin :
            <input
              name="isAdmin"
              type="checkbox"
              checked={this.state.is_admin}
              onChange={(e) => this.setState({ is_admin: e.target.checked })} />
          </label>

          <button class="text-red-700 font-bold text-2xl hover:underline" value="Envoyer" method="post" onClick={this.postRegister}>
            Envoyer
          </button>
        </div>
      </div>
    );
  }
}
