import React from 'react';
import logo from '../logo_ticket_tac.png';


export default class admin_getartists extends React.Component {
  state = {
    artists : [],
  }

  componentDidMount() {
    var axios = require('axios');

    var config = {
      method: 'get',
      url: 'http://localhost:3001/bands',
    };
    
    axios(config)
    .then( (response)  => {
      this.setState({ artists : response.data });
      console.log(JSON.stringify(this.state.artists));
    })
    .catch(function (error) {
      console.log(error);
    });
  }

deleteArtist(artist) {
  var axios = require("axios");
  var config = {
    method: "delete",
    url: `http://localhost:3001/bands/${artist._id}`,
    headers: {},
  };
  axios(config)
    .then((response) => {
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
      <a href="/admin_postartists" class="mt-16 ml-8 p-4 h-16 text-red-700 font-semibold text-2xl hover:text-white hover:bg-red-700 rounded-md"> Créer un nouvel artiste</a>
      </div>
      
  {this.state.artists.map((artists) => {
  return (
  <div key={artists._id} class="flex flex-row ml-64 gap-4 p-2">
 
   
   <p >{artists.artist_name}</p>
   <p>||</p>
    <p>{artists.category.category_name} </p>
   <img class="h-20" src={artists.photo} alt="artist"/>

    <button
    type="button"
    class="bg-red-700
          rounded-md
          text-white
          h-10
          px-2"
    onClick={() => this.deleteArtist(artists)}
  >
    Supprimer
  </button>
  
 
  <button
        type="button"
        class="border-2
        border-red-700
        rounded-md
        h-10
        px-2"
        onClick={() =>
          this.props.history.push(`/update/artist/${artists._id}`)
          }
  >
    Modifier
  </button>
  

  
</div>
);
})}

     </div>
     );
    }
  }