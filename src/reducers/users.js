import { RECEIVE_USERS } from '../actions/users'
import { ADD_TICKET, BUY_TICKET } from '../actions/tickets'

export default function users(state = {}, action) {
  switch(action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users
      }
    case ADD_TICKET:
      const ticket = action.ticket
      const { seller, id } = ticket

      return {
        ...state,
        [seller]: {
          ...state[seller],
          selling: state[seller].selling.concat([id])
        }
      }
    case BUY_TICKET:
      const { buyer } = ticket

      return {
        ...state,
        [buyer]: {
          ...state[buyer],
          buying: state[buyer].buying.concat([id])
        }
      }
    default:
      return state
  }
}
