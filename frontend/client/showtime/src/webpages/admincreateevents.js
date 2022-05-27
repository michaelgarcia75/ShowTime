import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo_ticket_tac.png";

export default class CreateEventAdmin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      band: "",
      city: "",
      genre: "",
      date: "",
      price: "",
      seats: "",
    };

    this.createEvent = this.createEvent.bind(this);
  }

  createEvent() {
    var axios = require("axios");
    var data = JSON.stringify({
      band_id: this.state.band,
      city: this.state.city,
      genre: this.state.genre,
      date: this.state.date,
      price: this.state.price,
      seats: this.state.seats,
    });

    var config = {
      method: "post",
      url: "http://localhost:3001/concerts",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        <Link to="/adminevents"></Link>;
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
            <input type="text" id="bandName" name="bandName" placeholder="Band Name" value={ this.state.band}
            onChange={(e) => this.setState({ band:e.target.value})}/>

            <input type="text" id="cityName" name="cityName" placeholder="City" value={ this.state.city}
            onChange={(e) => this.setState({ city:e.target.value})}/>

            <input type="text" id="genre" name="genre" placeholder="Genre" value={ this.state.genre}
            onChange={(e) => this.setState({ genre:e.target.value})}/>

            <input type="date" id="date" name="date" placeholder="Date" value={ this.state.date}
            onChange={(e) => this.setState({ date:e.target.value})}/>

            <input type="number" id="price" name="price" placeholder="Price" value={ this.state.price}
            onChange={(e) => this.setState({ price:e.target.value})}/>

            <input type="number" id="seats" name="seats" placeholder="Number of Seats" value={ this.state.seats}
            onChange={(e) => this.setState({ seats:e.target.value})}/>


          </form>

          <button
            class="text-red-700 font-bold text-2xl hover:underline"
            value="Envoyer"
            method="post"
            onClick={this.createEvent}
          >
            Envoyer
          </button>
        </div>
      </div>
    );
  }
}
