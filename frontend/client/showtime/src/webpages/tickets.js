import React from "react";

export default class Tickets extends React.Component {
  state = {
    tickets: [],
  };

  componentDidMount() {
    var axios = require("axios");

    var config = {
      method: "get",
      url: "http://localhost:3001/tickets",
    };

    axios(config)
      .then((response) => {
        this.setState({ tickets: response.data });
        console.log(JSON.stringify(this.state.tickets));
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        {this.state.tickets.map((tickets) => {
          return (
            <div key={tickets._id}>
              {tickets.user.firstname} {tickets.user.lastname}{" "}
              {tickets.event.event_name} {tickets.event.artist.artist_name}{" "}
              {tickets.event.description} {tickets.qrcode}{" "}
              {tickets.event.location.location_name}{" "}
              {tickets.event.category.category_name} {tickets.event.price}
            </div>
          );
        })}
      </div>
    );
  }
}
