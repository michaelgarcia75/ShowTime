import React from "react";
import axios from "axios";
import logo from "../logo_ticket_tac.png";

export default class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bookings: [],
      users: [],
    };

    this.componentDidMount = this.componentDidMount.bind(this);
  }
  state = {
    users: [],
    bookings: [],
  };

  logout = () => {
    window.localStorage.clear();
    window.location.reload(false);
    localStorage.removeItem("token");
  };

  componentDidMount() {
    var axios = require("axios");

    var id = localStorage.getItem("User_id");
    id = id.replace(/^"(.*)"$/, "$1");

    var configtickets = {
      method: "get",
      url: "http://localhost:3001/users/" + id,
      headers: {},
    };
    axios(configtickets)
      .then((res) => {
        console.log(JSON.stringify(res.data));
        this.setState({ bookings: res.data.bookings });
        this.setState({ users: res.data });
        console.log("bggg", res.data)
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


    let accesAdmin = this.state.users.is_admin ? false : null;
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
            <a href="/listArtists" class="">
              <img
                class="ml-60 w-20 mt-10 filter grayscale"
                title="Artistes"
                src="/images/woman-singer-light-skin-tone_1f469-1f3fb-200d-1f3a4.png"
                alt="Artistes"
              ></img>
            </a>
            <a href="/event_homepage" class="">
              <img
                class="ml-40 w-16 mt-12"
                title="Concerts"
                src="/images/microphone_1f3a4.png"
                alt="Artistes"
              ></img>
            </a>
          </div>
          <div class="flex flex-cols-3 ml-64">
            <div class="">
              <h1>{accesAdmin}</h1>
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
                <svg
                  class="w-8 h-8 float-right mt-16 text-red-700"
                  title="Login"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                  ></path>
                </svg>
              </a>
            </div>
            <div class="">
              <a href="/register" title="Inscription">
                <svg
                  class="w-8 h-8 mt-16 text-red-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                  ></path>
                </svg>
              </a>
            </div>
            <div class="">
              <a href="/" title="logout">
                <svg
                  class="w-8 h-8 float-right mt-16 text-red-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={this.logout}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                  >
                    <path d="M16 2v7h-2v-5h-12v16h12v-5h2v7h-16v-20h16zm2 9v-4l6 5-6 5v-4h-10v-2h10z" />
                  </svg>{" "}
                </svg>
              </a>
            </div>
          </div>
        </div>
        <br />

        {/* fin header */}
        <div class="flex flex-row mx-96 gap-96 mt-12">
          <div>
            <h1 class="text-2xl font-semibold py-2">Mon profil</h1>
            <div class="border-2 border-red-700 rounded-md px-20 py-4 flex flex-col gap-2 w-96">
              <div> Pseudo : {this.state.users.username} </div>
              <div> Email : {this.state.users.email} </div>
            </div>
            <h4>Mes Reservations</h4>
            <div class="ml-32 border-2 rounded-md border-red-700 mt-8 w-80">
              <h1 class="font-semibold">Reservations</h1>

              {this.state.bookings.map((booking, index) => {
                return (<div key={index} class="flex">
                  <div>
                    {this.state.bookings[index]}</div> </div>);
              })}
            </div>
          </div>
          <div class="flex flex-col">
            <button
              class="ml-32
        mt-10
        bg-red-700
        text-white
        rounded-md
        p-4
        w-80"
              onClick={() => {
                this.props.history.push(`/mesfavoris/${this.state.users._id}`);
              }}
            >
              Accéder aux favoris
            </button>
          </div>
        </div>
      </div>
    );
  }
}
