import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getEventInfo } from '../utils/api'

class Ticket extends Component {
  render() {
    const { tickets } = this.props

    return (
      <div>
        <h1>Your Tickets</h1>
        <ul>
        {tickets.map((ticket) => (
          <li key={ticket.id}>
            <p>{ticket.id}</p>
            <p>Ticket to {getEventInfo(ticket.event).title}</p>
            <p>Selling at {ticket.sellingPrice}</p>
          </li>
        ))}
        </ul>


      </div>
    )
  }
}

function mapStateToProps({ authUser, tickets }) {
  const userTickets = Object.keys(tickets).filter(id => tickets[id].seller === authUser)
  return {
    tickets: userTickets.map(id => {
      const ticket = tickets[id];

      return {
        ...ticket
      }
    }),
    authUser
  }
}

export default connect(mapStateToProps)(Ticket)
