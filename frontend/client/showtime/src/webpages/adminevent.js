import React from "react";
import axios from "axios";
import logo from "../logo_ticket_tac.png";
import { Link } from "react-router-dom";

export default class Concert extends React.Component {
  state = {
    concerts: [],
  };

  componentDidMount() {
    var axios = require("axios");

    var config = {
      method: "get",
      url: "http://localhost:3001/concerts",
    };

    axios(config)
      .then((response) => {
        this.setState({ concerts: response.data });      })
      .catch(function (error) {
        console.log(error);
      });
  }
  handleRemove(concert) {
    var config = {
      method: "delete",
      url: `http://localhost:3001/concerts/${concert._id}`,
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

  removeConcert = (e, concert) => {
    e.preventDefault();

    if (this.props.removeClick) {
      this.props.removeClick(concert.id);
    }
  };

  render() {
    return (
      <div>
        <div class="ml-64 w-72">
            <a href="/">
              <img src={logo} className="App-logo" alt="logo" title="Accueil"/>
            </a>
        </div>
        <Link to="/admincreateevents" class="hover:underline ml-64 text-xl font-bold text-red-700">Créer un Concert</Link>
        <div class="ml-64 mt-12 text-lg">
        {this.state.concerts.map((concerts) => {
          return (
              <div class="flex flex-col" key={concerts._id}>
                <h1>{concerts.band_id}</h1>
                <p>Genre : {concerts.genre}</p>
                <p> City : {concerts.city}</p>
                <p>Date : {concerts.date}</p>
                <p>Price : {concerts.price}</p>
                <p>Seats : {concerts.seats}</p>
                <div>
                <button
                class="font-bold hover:underline"
                  onClick={() =>
                    this.props.history.push(`/update/concerts/${concerts._id}`)
                  }
                >
                  Modifier |
                </button>
                <a href="/adminevents">
                <button class="font-bold hover:underline" onClick={() => this.handleRemove(concerts)}>
                | Supprimer
                </button>
                </a>
                </div>
                  <br/>
              </div>
          );
        })}
      </div>
            </div>
    );
  }
}

