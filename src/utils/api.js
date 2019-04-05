import {
  _getUsers,
  _getEvents,
  _getTickets,
  _saveTicket,
  _saveEventTicket,
  _getVenueInfo,
  _getEventInfo
} from './_DATA.js'

function formatEvents(events) {
  const eventIds = Object.keys(events);

  return eventIds.reduce((formattedEvents, id) => {
    const event = events[id]

    formattedEvents[id] = {
      ...event
    }

    return formattedEvents;
  }, {});
}

function formatUsers (users) {
  return Object.keys(users)
    .reduce((formattedUsers, id) => {
      const user = users[id]

      formattedUsers[id] = {
        ...user
      }

      return formattedUsers
    }, {})
}

export function getInitialData() {
  return Promise.all([
    _getUsers(),
    _getEvents(),
    _getTickets(),
  ]).then(([users, events, tickets]) => ({
    users: formatUsers(users),
    events: formatEvents(events),
    tickets
  }))
}

export function saveTicket(ticket) {
  return _saveTicket(ticket);
}

export function saveEventTicket(args) {
  return _saveEventTicket(args)
}

export function getVenueInfo(id) {
  return _getVenueInfo(id)
}

export function getEventInfo(id) {
  return _getEventInfo(id)
}
