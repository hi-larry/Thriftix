import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getVenueInfo } from '../utils/api'
import { Card } from 'react-bootstrap'

class Events extends Component {
  render() {
    const { events } = this.props;

    return (
      <div>
        <h2>Events</h2>
        <ul className='events'>
          {events.map((event) => (
            <li key={event.id}>
              <Card style={{width: '18rem'}}>
                <Card.Img variant='top' src={event.imageURL}/>
                <Card.Body>
                  <Card.Title>{event.title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{event.datetime}</Card.Subtitle>
                  <Card.Text>{getVenueInfo(event.venue).name}</Card.Text>
                  <Card.Text>{event.ticketCount} tickets left</Card.Text>
                </Card.Body>
              </Card>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

function mapStateToProps({ events }) {
  return {
    events: Object.keys(events).map(id => {
      const event = events[id];

      return {
        ...event,
        ticketCount: event.tickets.length
      }
    })
  }
}

export default connect(mapStateToProps)(Events)
