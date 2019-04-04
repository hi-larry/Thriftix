import { RECEIVE_TICKETS, ADD_TICKET, BUY_TICKET } from '../actions/tickets'

export default function tickets(state = {}, action) {
  switch(action.type) {
    case RECEIVE_TICKETS:
      return {
        ...state,
        ...action.tickets
      }
    case ADD_TICKET:
      return {
        ...state,
        [action.ticket.id]: action.ticket
      }
    case BUY_TICKET:
      const { user, id } = action;
      const ticket = state[id];

      return {
        ...state,
        [id]: {
          ...ticket,
          buying: user
        }
      }
    default:
      return state
  }
}
