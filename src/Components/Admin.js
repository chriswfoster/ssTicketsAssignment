import React, {Component} from 'react'
import socketIOClient from "socket.io-client"

class Admin extends Component {
    constructor() {
        super();
        this.state= {
            tickets: [],
            ticketNameText: ""
        }
        this.socket = socketIOClient("/")
    }
    componentDidMount() {
        this.socket.on("Tickets", tickets => {
          this.setState({tickets})
        })
      }

    textHandler(e, fieldName) {
        this.setState({[fieldName]: e.target.value})
    }

    submitHandler(e){
        e.preventDefault()
        this.socket.emit("AddTicket", this.state.ticketNameText)
        this.setState({ticketNameText: ""})
    }
    deleteTicket(id) {
        this.socket.emit("DeleteTicket", id)
    }

    render() {
        console.log(this.state)
        const ticketList = this.state.tickets.map((ticket, i) => {
            return <div style={{minWidth: "100vw"}} key={i} id={ticket.id}>
                <p style={{display: "inline"}}>id: {ticket.id} | title: {ticket.title} | status: {ticket.status}
                </p>
                <button style={{backgroundColor: "red"}} onClick={()=> this.deleteTicket(ticket.id)} >DELETE</button>
            </div>
        })
        return (
        <div className="adminViewScroll">
            <form onSubmit={(e)=>this.submitHandler(e)}>
            Create a ticket: <input value={this.state.ticketNameText} onChange={(e) => this.textHandler(e, "ticketNameText")} placeholder="Ticket name or title" />
            <button type="Submit">SUBMIT</button>
            </form>
            {ticketList}
        </div>)
    }

}
export default Admin