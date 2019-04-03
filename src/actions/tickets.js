export const RECEIVE_TICKETS = 'RECEIVE_TICKETS';
export const ADD_TICKET = 'ADD_TICKET';
export const BUY_TICKET = 'BUY_TICKET';

export function receiveTickets(tickets) {
  return {
    type: RECEIVE_TICKETS,
    tickets
  }
}

export function addTicket({ user, ticket, event }) {
  return {
    type: ADD_TICKET,
    user,
    ticket,
    event
  }
}

export function buyTicket(id) {
  return {
    type: BUY_TICKET,
    id
  }
}
