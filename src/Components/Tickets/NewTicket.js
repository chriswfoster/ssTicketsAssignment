import React, { Component } from 'react';

import socketIOClient from "socket.io-client";

class NewTicket extends Component {
    constructor() {
        super();
        this.state = {
          tickets: [],
          endpoint: "/"
        }
        this.socket = socketIOClient("/")
      }

    acceptTicket(id) {
      this.socket.emit("AcceptTicket", id)  
    }

    render(){
        console.log(this.props)
        const {status, title, id} = this.props.ticket
        return (
            <div className="fontSizeControl">
                <p className="fontSizeControl" style={{display: "inline"}}>{title} | {status} | </p>
                <p style={{display: "inline"}} className="buttonStyles button" onClick={() => this.acceptTicket(id)}>Accept</p>
            </div>
        )
    }
}
export default NewTicket;