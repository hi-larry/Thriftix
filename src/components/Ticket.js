import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getEventInfo } from '../utils/api'
import { Table } from 'react-bootstrap'

class Ticket extends Component {
  render() {
    const { tickets } = this.props

    return (
      <div>
        <h2>Your Tickets</h2>
        <Table responsive>
          <thead>
            <tr>
              <th>Ticket #</th>
              <th>Event</th>
              <th>Ticket Type</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
          {tickets.map((ticket) => (
            <tr>
              <td>{ticket.id}</td>
              <td>{getEventInfo(ticket.event).title}</td>
              <td>{ticket.type}</td>
              <td>{ticket.sellingPrice} {ticket.currency}</td>
              <td>{ticket.status}</td>
            </tr>
          ))}
          </tbody>
        </Table>
        <ul>

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
