import React from 'react';


export default class Requete_artistfavoris extends React.Component {
  state = {
    artistfavoris : [],
  }

  componentDidMount() {
      var axios = require('axios');

      var config = {
        method: 'get',
        url: 'http://localhost:3001/artist_favoris/user/:id',
      };
      
      axios(config)
      .then( (response)  => {
        this.setState({artistfavoris : response.data});
        console.log(JSON.stringify(this.state.artistfavoris));
      })
      .catch(function (error) {
        console.log(error);
      });
    }
      

  render(){
    return (
     <div> 
    {this.state.artistfavoris.map((artistfavoris) => {return (<div key={artistfavoris._id}>{artistfavoris.artist.artist_name} <img class="h-20" src={artistfavoris.artist.photo}/></div>);})}
     </div> 
     );
    }
  }