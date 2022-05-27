import React from 'react';
import logo from '../logo_ticket_tac.png';


export default class admin_getartists extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          artist_name: "",
          photo: "",
          category:"",
          categories: [],
        };
        this.postArtist = this.postArtist.bind(this);
      }
    
      componentDidMount() {
        var axios = require("axios");

        var configcategories = {
          method: "get",
          url: "http://localhost:3001/bands",
        };

        axios(configcategories)
        .then((response) => {
          this.setState({ categories: response.data });
          console.log(JSON.stringify(this.state.categories));
        })
        .catch(function (error) {
          console.log(error);
        });
    }

    postArtist() {
        var axios = require('axios');
        var data = JSON.stringify({
          artist_name: this.state.artist_name,
          photo: this.state.photo,
          category: this.state.category,
        });
        
        var config = {
          method: 'post',
          url: 'http://localhost:3001/bands',
          headers: { 
            'Content-Type': 'application/json'
          },
          data : data
        };
        
        axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
          console.log(error);
        });
        }

  render(){
    return (
     <div> 
       <div class="flex flex-row">
      <div class="ml-64 w-72">
        <img src={logo} alt="logo"/>
      </div>
      <a href="/crud_artist" class="mt-16 ml-8 p-4 h-16 text-red-700 font-semibold text-2xl hover:text-white hover:bg-red-700 rounded-md"> Retour </a>
      </div>
      <div class="flex flex-col ml-72 gap-4">
        <label>
             <p>Nom de l'artiste</p>
             <input
             class="
             border-2
             rounded-md
             border-black
             p-2"
             type="text"
             value={this.state.artist_name}
             onChange={(e) => this.setState({ artist_name: e.target.value })}
             />
        </label>
        <label>
             <p>URL d'une photo de l'artiste</p>
             <input
              class="
              border-2
              rounded-md
              border-black
              p-3"
             type="text"
             value={this.state.photo}
             onChange={(e) => this.setState({ photo: e.target.value })}
             />
        </label>
        <select
         class="border-2
         w-60
         p-3
         border-red-700
         rounded-md"
          onChange={(ele) => this.setState({ category: ele.target.value })}
        >
          <option value="" selected disabled>
            Sélectionner une categorie
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
        <div>
          <button 
          class="bg-red-700
          text-white
          rounded-md
          px-5
          py-2"
          type="submit" onClick={this.postArtist}>
            Envoyer
          </button>
        </div> 
      </div>  
    </div> 
     );
    }
  }