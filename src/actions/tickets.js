import { saveTicket } from '../utils/api'

export const RECEIVE_TICKETS = 'RECEIVE_TICKETS';
export const ADD_TICKET = 'ADD_TICKET';
export const BUY_TICKET = 'BUY_TICKET';

export function receiveTickets(tickets) {
  return {
    type: RECEIVE_TICKETS,
    tickets
  }
}

export function addTicket(ticket) {
  return {
    type: ADD_TICKET,
    ticket
  }
}

export function buyTicket(id) {
  return {
    type: BUY_TICKET,
    id
  }
}

export function handleAddTicket(ticket) {
  return (dispatch, getState) => {
    const { authUser } = getState();

    return saveTicket({
      ...ticket,
      seller: authUser
    }).then(ticket => dispatch(addTicket(ticket)))
  }
}
