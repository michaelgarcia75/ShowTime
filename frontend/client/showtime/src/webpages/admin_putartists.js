import React from "react";
import logo from '../logo_ticket_tac.png';

export default class UpdateArtistAdmin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      artist_name: "",
      photo: "",
      category: "",

      categories: [],
      artists: [],
      
    };

    this.updateArtist = this.updateArtist.bind(this);
  }
  state = {
    artists: [],
  };

  componentDidMount() {
    var axios = require("axios");
    const id = this.props.match.params._id;
    var configartistname = {
      method: "get",
      url: "http://localhost:3001/bands/" + id,
      headers: {},
    };

    axios(configartistname)
      .then((response) => {
        this.setState({ artists: response.data });
        /* console.log(JSON.stringify(this.state.events)); */
      })
      .catch(function (error) {
        console.log(error);
      });

    var configartistphoto = {
      method: "get",
      url: "http://localhost:3001/bands/" + id,
      headers: {},
    };

    axios(configartistphoto)
      .then((response) => {
        this.setState({ artists: response.data});
        /* console.log(JSON.stringify(this.state.events)); */
      })
      .catch(function (error) {
        console.log(error);
      });

    var configartistcategory = {
      method: "get",
      url: "http://localhost:3001/bands/" + id,
      headers: {},
    };

    axios(configartistcategory)
      .then((response) => {
        this.setState({ artists: response.data.category });
        /* console.log(JSON.stringify(this.state.events)); */
      })
      .catch(function (error) {
        console.log(error);
      });

    
    var configcategories = {
      method: "get",
      url: "http://localhost:3001/categories",
    };

    axios(configcategories)
      .then((response) => {
        this.setState({ categories: response.data });
        /* console.log(JSON.stringify(this.state.categories)); */
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  updateArtist() {
    var axios = require("axios");
    var data = JSON.stringify({
      artist_name: this.state.artist_name,
      photo: this.state.location,
      category: this.state.category,
    });
    const id = this.props.match.params._id;

    var config = {
      method: "put",
      url: "http://localhost:3001/bands/" + id,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  render() {
    return (
      <div>
        <div class="flex flex-row">
      <div class="ml-64 w-72">
        <img src={logo} alt="logo"/>
      </div>
      <a href="/crud_artist" class="mt-16 ml-8 p-4 h-16 text-red-700 font-semibold text-2xl hover:text-white hover:bg-red-700 rounded-md"> Retour </a>
      </div>
        {/* {this.state.events.map((events) => {
          return <div key={events._id}> {events._id} </div>;
        })} */} 
      <div class="ml-72 mt-8 flex flex-row gap-5">
       <div class="flex flex-col ">
        <div>
          Reselectionner la catégorie dans la liste
        </div>
       
        <select
        class="border-2
        border-red-700
        rounded-md"
          onChange={(e) => this.setState({ category: e.target.value })}
        >
          <option value="" selected disabled>
            {this.state.artists.category_name}
          </option>
          {this.state.categories.map((categories) => {
            return (
              <option
                key={categories._id}
                value={categories._id}
                onChange={(el) => this.setState({ category: categories._id })}
              >
                {categories.category_name}
              </option>
            );
          })}
        </select>
        </div>
        <label
        class="mt-2">
          Nom de l'artiste
          <input
          class="border-2
          rounded-md
          border-black
          ml-2
          h-8"
            type="text"
            value={this.state.artist_name}
            onChange={(e) => this.setState({ artist_name: e.target.value })}
            placeholder="Vide si non modifié"
          />
        </label>
      
        <label 
        class="mt-2">
          URL d'une photo de l'artiste
          <input
            class="border-2
            rounded-md
            border-black
            ml-2
            h-8"
            type="text"
            value={this.state.photo}
            onChange={(e) => this.setState({ photo: e.target.value })}
            placeholder="Vide si non modifié"
          />
        </label>
        <button 
        class="bg-red-700
        text-white
        rounded-md
        px-5
        py-2"
        value="Envoyer" method="post" onClick={this.updateArtist}>
          Modifier
        </button>
        </div>
      </div>
    );
  }
}
