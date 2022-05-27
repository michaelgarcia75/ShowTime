import React from "react";
import logo from "../logo_ticket_tac.png";

export default class ListArtist extends React.Component {
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
        console.log(JSON.stringify(this.state.bands));
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  logout = () => {
    window.localStorage.clear();
    window.location.reload(false);
    localStorage.removeItem("token");
  };

  render() {

    return (
      <div>
        <div>
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
        </div>
        <div class="ml-72 mt-20 space-x-2 flex flex-row w-9/12 flex-wrap">
          <h1>
            <u>BAND LIST</u> :
          </h1>
          <br />
          {this.state.bands.map((bands) => {
            return (
              <div class="font-semibold text-red-900" key={bands._id}>
                {" "}
                <a href={`/page_artist/${bands._id}`}>{bands.name}</a>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
