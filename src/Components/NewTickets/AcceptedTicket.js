import React, {Component} from 'react'
import socketIOClient from "socket.io-client";

const socket = socketIOClient(":1738/")

const AcceptedTicket = props => {

    const deleteTicket = (id) => {
        socket.emit("DeleteTicket", id)
    }
    const {status, title, id} = props.ticket
        return (
            <div >
                <p style={{display: "inline"}}>{title} | In progress | </p>
                <button style={{border: "none"}} onClick={() => deleteTicket(id)}>"Close"</button>
            </div>
        )
}

export default AcceptedTicket;