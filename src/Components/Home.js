import React, { Component } from 'react';
import socketIOClient from "socket.io-client"
import { notification } from 'antd';

import '../App.css';
import TicketBox from './Tickets/TicketBox';
import ReadyGear from './ReadyGear'
import SpinsciCopyright from './SpinsciCopyright';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      tickets: [],
      endpoint: "/",
      ticketCount: 0
    }
    this.socket = socketIOClient("/")
  }
  componentDidMount() {
    this.socket.on("Tickets", tickets => {
        if (tickets.length > this.state.ticketCount){
            notification.config({
                placement: "topLeft"
              });
            notification["warning"]({
                message: 'You have new cases in your queue',
              });
        }
      this.setState({tickets, ticketCount: tickets.length})
    })
  }



  render() {
      console.log(window)
      window.innerHeight="420";
      window.innerWidth="330";
      window.outerHeight="420";
      window.outerWidth="330"
    return (
      <div className="App">
      <div className="flexTitlebar">
          <p style={{display: "inline"}} className="welcomeAgent" >Welcome <b>Rachel Gonzales</b></p>
          <img src={require('./spinsci.jpeg')} style={{width: "80px", height: "20px"}}/>
        </div>
        <TicketBox ticketList = {this.state.tickets}/>
        <ReadyGear />
        <SpinsciCopyright />
      </div>
    );
  }
}

export default Home;
