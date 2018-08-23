import React, { Component } from 'react';
import socketIOClient from "socket.io-client"



import '../App.css';
import TicketBox from './NewTickets/TicketBox';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      tickets: [],
      endpoint: "/"
    }
    this.socket = socketIOClient(":1738/")
  }
  componentDidMount() {
    this.socket.on("Tickets", tickets => {
      this.setState({tickets})
    })
  }

  render() {
    return (
      <div className="App">
      <p className="welcomeAgent" >Welcome Agent Bob</p>
        <TicketBox ticketList = {this.state.tickets}/>
      </div>
    );
  }
}

export default Home;
