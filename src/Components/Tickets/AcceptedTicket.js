import React, {Component} from 'react'
import socketIOClient from "socket.io-client";

const socket = socketIOClient("/")

const AcceptedTicket = props => {

    const deleteTicket = (id) => {
        socket.emit("DeleteTicket", id)
    }
    const {status, title, id} = props.ticket
        return (
            <div style={{padding: "5px"}}>
                <p className="fontSizeControl" style={{display: "inline"}}>{title} | In Progress | </p>
                <p style={{display: "inline"}} className="buttonStyles button" onClick={() => deleteTicket(id)}>Close</p>
                <p className="buttonStyles button" style={{display: "inline"}}>Pause</p><p style={{display: "inline"}} className="button buttonStyles">Transfer</p>
            </div>
        )
}

export default AcceptedTicket;