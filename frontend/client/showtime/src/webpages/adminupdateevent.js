import React from "react";
import logo from "../logo_ticket_tac.png";

export default class updateConcerts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.updateConcert = this.updateConcert.bind(this);
  }

  updateConcert(concert) {
    var axios = require("axios");
    var data = JSON.stringify({
      band_id: this.state.band_id,
      genre: this.state.genre,
      city: this.state.city,
      date: this.state.date,
      price: this.state.price,
      seats: this.state.seats
    });
    const id = this.props.match.params._id;
    console.log(typeof id);
    var config = {
      method: "patch",
      url: "http://localhost:3001/concerts/" + id,
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
            Band :
            <input
              class="border-2 border-black rounded-lg ml-20 h-10 pl-2"
              type="varchar"
              value={this.state.band_id}
              onChange={(e) => this.setState({ band_id: e.target.value })}
              placeholder="Vide si non modifié"
            />
          </label>
          <label>
            Genre :
            <input
              class="border-2 border-black rounded-lg ml-12 h-10 pl-2"
              type="string"
              value={this.state.genre}
              onChange={(e) => this.setState({ genre: e.target.value })}
              placeholder="Vide si non modifié"
            />
          </label>
          <label>
            City :
            <input
              class="border-2 border-black rounded-lg ml-28 h-10 pl-2"
              type="varchar"
              value={this.state.city}
              onChange={(e) => this.setState({ city: e.target.value })}
              placeholder="Vide si non modifié"
            />
          </label>
          <label>
            Date :
            <input
              class="border-2 border-black rounded-lg ml-28 h-10 pl-2"
              type="date"
              value={this.state.date}
              onChange={(e) => this.setState({ date: e.target.value })}
              placeholder="Vide si non modifié"
            />
          </label>
          <label>
            Price :
            <input
              class="border-2 border-black rounded-lg ml-28 h-10 pl-2"
              type="number"
              value={this.state.price}
              onChange={(e) => this.setState({ price: e.target.value })}
              placeholder="Vide si non modifié"
            />
          </label>
          <label>
            Seats :
            <input
              class="border-2 border-black rounded-lg ml-28 h-10 pl-2"
              type="number"
              value={this.state.seats}
              onChange={(e) => this.setState({ seats: e.target.value })}
              placeholder="Vide si non modifié"
            />
          </label>
          <a href="/adminevents">
          <button class="text-red-700 font-bold text-2xl hover:underline" value="Envoyer" method="post" onClick={this.updateConcert}>
            Envoyer
          </button>
          </a>
        </div>
      </div>
    );
  }
}
