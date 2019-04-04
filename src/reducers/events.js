import { RECEIVE_EVENTS } from '../actions/events'

export default function tickets(state = {}, action) {
  switch(action.type) {
    case RECEIVE_EVENTS:
      return {
        ...state,
        ...action.events
      }
    default:
      return state
  }
}
