import React from "react";
import axios from "axios";
import logo from "../logo_ticket_tac.png";
import { Link } from "react-router-dom";

export default class User extends React.Component {
  state = {
    users: [],
  };

  componentDidMount() {
    var axios = require("axios");

    var config = {
      method: "get",
      url: "http://localhost:3001/users",
    };

    axios(config)
      .then((response) => {
        this.setState({ users: response.data });
        console.log(response.data)
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  handleRemove(user) {
    var config = {
      method: "delete",
      url: `http://localhost:3001/users/${user._id}`,
      headers: {},
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  removeUser = (e, user) => {
    e.preventDefault();

    if (this.props.removeClick) {
      this.props.removeClick(user.id);
    }
  };

  render() {
    return (
      <div>
        <div class="ml-64 w-72">
          <a href="/">
            <img src={logo} className="App-logo" alt="logo" title="Accueil" />
          </a>
        </div>
        <Link to="/admincreateusers" class="hover:underline ml-64 text-xl font-bold text-red-700">Créer un Utilisateur</Link>
        <div class="ml-64 mt-12 text-lg">
          {this.state.users.map((users) => {
            console.log(users)
            return (
              <div class="flex flex-col" key={users._id}>
                <h1> {users.username} / {users.email} / admin : {users.is_admin ? "oui" : "non"}</h1>

                <div>
                  <button
                    class="font-bold hover:underline"
                    onClick={() =>
                      this.props.history.push(`/update/users/${users._id}`)
                    }
                  >
                    Modifier |
                  </button>
                  <button class="font-bold hover:underline" onClick={() => this.handleRemove(users)}>
                    | Supprimer
                  </button></div>
                <br />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
