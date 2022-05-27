import React from "react";
import axios from "axios";
import logo from "../logo_ticket_tac.png";
import { Link } from "react-router-dom";

export default class Band extends React.Component {
  state = {
    bands: [],
  };

  componentDidMount() {
    var axios = require("axios");

    var config = {
      method: "get",
      url: "http://localhost:3001/bands",
    };

    axios(config)
      .then((response) => {
        this.setState({ bands: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  handleRemove(band) {
    var config = {
      method: "delete",
      url: `http://localhost:3001/bands/${band._id}`,
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

  removeBand = (e, band) => {
    e.preventDefault();

    if (this.props.removeClick) {
      this.props.removeClick(band.id);
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
        <Link to="/admincreateartists" class="hover:underline ml-64 text-xl font-bold text-red-700">Créer un Groupe</Link>
        <div class="ml-64 mt-12 text-lg">
          {this.state.bands.map((bands) => {
            return (
              <div class="flex flex-col" key={bands._id}>
                <p>{bands.name}</p>
                <div>
                  <button
                    class="font-bold hover:underline"
                    onClick={() =>
                      this.props.history.push(`/update/bands/${bands._id}`)
                    }
                  >
                    Modifier |
                  </button>
                  <a href="/adminartists">
                    <button class="font-bold hover:underline" onClick={() => this.handleRemove(bands)}>
                      | Supprimer
                    </button>
                  </a>
                </div>
                <br />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
