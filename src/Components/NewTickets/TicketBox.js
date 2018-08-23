import React, {Component} from 'react';
import NewTicket from './NewTicket';
import AcceptedTicket from './AcceptedTicket';

class TicketBox extends Component {
constructor() {
    super();
    this.state = {
        
    }
}

    render(){
        console.log(this.props)
        const newTicketList = this.props.ticketList.map((ticket, i) => {
            console.log(ticket.status)
            return ticket.status==="New" ? <NewTicket key={i} ticket={ticket} />
            : null
        })
        const acceptedTicketList = this.props.ticketList.map((ticket, i) => {
            return ticket.status==="Accepted" ? <AcceptedTicket key={i} ticket={ticket} /> : null
        })
        return (
            <div>
                {newTicketList}
                {acceptedTicketList}
            </div>
        )
    }
}

export default TicketBox;