import {
  _getUsers,
  _getEvents,
  _saveTicket,
  _saveEventTicket
} from './_DATA.js'

export function getInitialData() {
  return Promise.all([
    _getUsers(),
    _getEvents(),
  ]);
}

export function saveTicket(ticket) {
  return _saveTicket(ticket);
}

export function _saveEventTicket(args) {
  return _saveEventTicket(args)
}
