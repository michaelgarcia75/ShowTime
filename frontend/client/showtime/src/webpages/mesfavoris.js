import React from "react";
import Requete_artistfavoris from "./requete_artistfavoris";
import RequeteWishlist from "./requete_wishlist";
import logo from "../logo_ticket_tac.png";

export default class mesfavoris extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      artistfavoris: [],
      users: [],
      wishlists: [],
    };
  }
  state = {};

  componentDidMount() {
    var axios = require("axios");

    var id = localStorage.getItem("User_id");
    id = id.replace(/^"(.*)"$/, "$1");
    console.log(id);
    var configArtistFav = {
      method: "get",
      url: "http://localhost:3001/artist_favoris/user/" + id,
    };

    axios(configArtistFav)
      .then((response) => {
        this.setState({ artistfavoris: response.data });
        console.log(JSON.stringify(this.state.artistfavoris));
      })
      .catch(function (error) {
        console.log(error);
      });

    var configWishlists = {
      method: "get",
      url: "http://localhost:3001/wishlists/user/" + id,
    };

    axios(configWishlists)
      .then((response) => {
        this.setState({ wishlists: response.data });
        console.log(JSON.stringify(this.state.wishlists));
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
                 {/* header */}
      <div className="App" class="grid grid-cols-3 grid-rows-1">

<div class="ml-64 w-72" title="Accueil">
    <a href="/">
        <img src={logo} className="App-logo" alt="logo"/>
    </a>
</div>
<div class="flex flex-row">
    <a href= "/listArtists" class=""><img class = "ml-60 w-20 mt-10 filter grayscale" title="Artistes" src="/images/woman-singer-light-skin-tone_1f469-1f3fb-200d-1f3a4.png" alt="Artistes"></img></a>
    <a href= "/event_homepage" class=""><img class = "ml-40 w-16 mt-12" title="Concerts" src="/images/microphone_1f3a4.png" alt="Artistes"></img></a>
</div>
<div class="flex flex-cols-4 ml-64">
    <div class="">
        <a href="/page_admin" title="Admin">
        <svg class="w-8 h-8 mt-16 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
        </a>            
    </div>
    <div class="">
        <a href="/profile" title="Profil">
        <svg class="w-8 h-8 mt-16 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        </a>            
    </div>
    <div class="">
        <a href="/login" title="Connexion">
            <svg class="w-8 h-8 float-right mt-16 text-red-700" title = "Login" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"></path></svg>
        </a>            
    </div>
    <div class="">
        <a href="/register" title="Inscription">
            <svg class="w-8 h-8 mt-16 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"></path></svg>
        </a>            
    </div>
</div>
</div>
<br />
<div class = "p-8 mx-64 bg-red-700 flex flex-row space-x-4 bg-opacity-80 rounded-lg">
    <div>
        <select name="genre" id="genre" class="rounded-lg h-10 bg-white">
            <option value="genres" selected disabled>Genre de musique</option>
            <option value="rock">Rock</option>
            <option value="rap">Rap</option>
            <option value="classique">Classique</option>
            <option value="rnb">RnB</option>
        </select> 
    </div>
    <div>
        <select name="ville" id="ville" class="rounded-lg h-10 bg-white">
            <option value="ville" selected disabled>Ville</option>
            <option value="marseille">Marseille</option>
            <option value="paris">Paris</option>
            <option value="montpellier">Montpellier</option>
            <option value="aubagne">Aubagne</option>
        </select> 
    </div>
    <div>
        <input type = "text" placeholder="Recherche" class = "rounded-lg recherche h-10"></input>
    </div>
    <button type = "button" class = "rounded-lg search bg-white w-40">Recherche</button>
</div>
{/* fin header */}
<div class="mx-72 mt-12">
        <h1 class="font-semibold text-2xl mb-4 mx-96">Mes favoris</h1>
        <div class="flex flex-row gap-20 mx-96">
          <div class="border-2 border-red-700 rounded-md w-80 flex flex-col gap-4 p-2">
            <h1 class="font-semibold">J'adore !</h1>
            {this.state.artistfavoris.map((artistfavoris) => {
              return (
                <div key={artistfavoris._id}>
                  {artistfavoris.artist.artist_name}{" "}
                  <img class="h-20" src={artistfavoris.artist.photo} />
                </div>
              );
            })}
          </div>

          <div class="border-2 border-red-700 rounded-md w-80 flex flex-col gap-4 p-2">
            <h1 class="font-semibold">Je veux y aller !</h1>
            {this.state.wishlists.map((wishlists) => {
              return (
                <div key={wishlists._id}>
                  {wishlists.event.event_name}{" "}
                  <img class="h-20" src={wishlists.event.photo} />
                </div>
              );
            })}
          </div>
        </div>
        </div>
      </div>
    );
  }
}
