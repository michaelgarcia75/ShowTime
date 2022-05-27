import React from 'react';


export default class RequeteWishlist extends React.Component {
  state = {
    wishlists : [],
  }

  componentDidMount() {
      var axios = require('axios');

      var config = {
        method: 'get',
        url: 'http://localhost:3001/wishlists/user/:id',
      };
      
      axios(config)
      .then( (response)  => {
        this.setState({wishlists : response.data});
        console.log(JSON.stringify(this.state.wishlists));
      })
      .catch(function (error) {
        console.log(error);
      });
    }
      

  render(){
    return (
     <div> 
    {this.state.wishlists.map((wishlists) => {return (<div key={wishlists._id}>{wishlists.event.event_name} <img class="h-20" src={wishlists.event.photo}/></div>);})}
     </div> 
     );
    }
  }