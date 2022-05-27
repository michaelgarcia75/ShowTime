import React from "react";
import logo from "../logo_ticket_tac.png";

export default class updateBands extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.updateBand = this.updateBand.bind(this);
  }

  updateBand(band) {
    var axios = require("axios");
    var data = JSON.stringify({
      name: this.state.name,
    });
    const id = this.props.match.params._id;
    console.log(typeof id);
    var config = {
      method: "patch",
      url: "http://localhost:3001/bands/" + id,
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
        <div class="ml-64 flex flex-col space-y-4 mt-12 text-lg">
          <label>
            Band Name :
            <input
              class="border-2 border-black rounded-lg ml-20 h-10 pl-2"
              type="varchar"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
              placeholder="Vide si non modifié"
            />
          </label>
          <a href="/adminartists">
          <button class="text-red-700 font-bold text-2xl hover:underline" value="Envoyer" method="post" onClick={this.updateBand}>
            Envoyer
          </button>
          </a>
        </div>
      </div>
    );
  }
}
