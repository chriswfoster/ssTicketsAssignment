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
            <div >
                <p style={{display: "inline"}}>{title} | {status} | </p>
                <button style={{border: "none"}} onClick={() => this.acceptTicket(id)}>"Accept"</button>
            </div>
        )
    }
}
export default NewTicket;