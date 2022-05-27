import React from 'react';

import axios from 'axios';

export default class EventName extends React.Component {
  state = {
    events: []
  }

  componentDidMount() {
    axios.get(`http://localhost:3001/concerts/6124f16d187cf5cc278a20e4`)
      .then(res => {
        const events = res.data;
        this.setState({ events });
      })
  }

  render() {
    return (
      <ul>
        { this.state.events.map(events => <li>{events.event_name}</li>)}
      </ul>
    )
  }
}