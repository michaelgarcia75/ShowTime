import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo_ticket_tac.png";

export default class CreateArtistAdmin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
    };

    this.createArtist = this.createArtist.bind(this);
  }

  createArtist() {
    var axios = require("axios");
    var data = JSON.stringify({
      name: this.state.name,
    });

    var config = {
      method: "post",
      url: "http://localhost:3001/bands",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        <Link to="/adminartists"></Link>;
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
        <div class="flex flex-col space-y-4 ml-64 text-lg mt-12">
          <form>
            <input type="text" id="bandName" name="bandName" placeholder="Band Name" value={ this.state.name}
            onChange={(e) => this.setState({ name:e.target.value})}/>
          </form>

          <button
            class="text-red-700 font-bold text-2xl hover:underline"
            value="Envoyer"
            method="post"
            onClick={this.createArtist}
          >
            Envoyer
          </button>
        </div>
      </div>
    );
  }
}
