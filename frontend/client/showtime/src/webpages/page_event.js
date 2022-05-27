import React from "react";
import axios from "axios";
import logo from "../logo_ticket_tac.png";

import { useParams } from "react-router-dom";

export default function PageEvent() {
  const [concerts, setPost] = React.useState(null);
  let { _id } = useParams();

  React.useEffect(() => {
    axios.get("http://localhost:3001/concerts/" + _id).then((response) => {
      setPost(response.data);
      console.log(response.data);
    })
      .catch((error) => console.log(error.data));
  }, []);

  function createticket(concerts) {
    var id = localStorage.getItem("User_id");
    id = id.replace(/^"(.*)"$/, "$1");
    var data = JSON.stringify({
      concertId: concerts._id,
    });
    var userId = localStorage.getItem("User_id");
    console.log("bg", userId)
    var config = {
      method: "patch",
      url: `http://localhost:3001/users/${userId}/booking`,
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
  };
  function addToWishlist(concerts) {
    var id = localStorage.getItem("User_id");
    id = id.replace(/^"(.*)"$/, "$1");
    var data = JSON.stringify({
      concertId: concerts._id,
    });
    var userId = localStorage.getItem("User_id");
    console.log("bg", userId)
    var config = {
      method: "patch",
      url: `http://localhost:3001/users/${userId}/wishlist`,
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

  if (!concerts) return "";

  return (
    <div>
      {/* header */}
      <div className="App" class="grid grid-cols-3 grid-rows-1">

        <div class="ml-64 w-72" title="Accueil">
          <a href="/">
            <img src={logo} className="App-logo" alt="logo" />
          </a>
        </div>
        <div class="flex flex-row">
          <a href="/listArtists" class=""><img class="ml-60 w-20 mt-10 filter grayscale" title="Artistes" src="/images/woman-singer-light-skin-tone_1f469-1f3fb-200d-1f3a4.png" alt="Artistes"></img></a>
          <a href="/event_homepage" class=""><img class="ml-40 w-16 mt-12" title="Concerts" src="/images/microphone_1f3a4.png" alt="Artistes"></img></a>
        </div>
        <div class="flex flex-cols-3 ml-64">
          <div class="">
            <svg
              class="w-8 h-8 mt-16 text-red-700 cursor-pointer"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              onClick={() => {
                if (localStorage.getItem("User_id"))
                  if (localStorage.getItem("is_admin") !== "false") {
                    this.props.history.push(
                      `/page_admin/`
                    );
                  } else {
                    this.props.history.push(`/`);
                  }
              }}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              ></path>
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              ></path>
            </svg>
          </div>
          <div class="">
            <svg
              class="w-8 h-8 mt-16 text-red-700 cursor-pointer"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              onClick={() => {
                if (localStorage.getItem("User_id")) {
                  this.props.history.push(`/profile/${localStorage.getItem("User_id")}`);
                } else {
                  this.props.history.push(`/login`);
                }
              }}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          </div>
          <div class="">
            <a href="/login" title="Connexion">
              <svg class="w-8 h-8 float-right mt-16 text-red-700" title="Login" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"></path></svg>
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
      <div class="p-8 mx-64 bg-red-700 flex flex-row space-x-4 bg-opacity-80 rounded-lg">
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
          <input type="text" placeholder="Recherche" class="rounded-lg recherche h-10"></input>
        </div>
        <button type="button" class="rounded-lg search bg-white w-40">Recherche</button>
      </div>
      {/* fin header */}
      <div class="flex flex-col gap-7 mx-64 pt-10">
        <div class="flex flex-row gap-5 mx-96">

          <div>
          </div>
          <div class="flex flex-col gap-52">
            <div class="flex flex-col gap-1">
              <h1 class="text-lg font-semibold">{concerts.band_id} </h1>
              <p>Genre : {concerts.genre}</p>
              <h1> City : {concerts.city}</h1>
              <p>Date : {concerts.date}</p>
              <p>Price : {concerts.price}</p>
              <p>Seats : {concerts.seats}</p>
            </div>
            <div class="flex flex-row gap-2 rounded-md">
              <button
                class="bg-red-700
                        text-white
                        rounded-md
                        p-2"
                onClick={() => createticket(concerts)}
              >
                Réserver
              </button>
              <button
                class="flex flex-row gap-1 
                        border-2 border-red-700 rounded-md
                        p-2
                        text-red-700"
                onClick={() => addToWishlist(concerts)}
              >
                <svg
                  class="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                Je veux y aller !{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
