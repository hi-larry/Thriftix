import { getInitialData } from '../utils/api'
import { receiveEvents } from './events'
import { receiveUsers } from './users'
import { receiveTickets } from './tickets'
import { setAuthUser } from './authUser'

const AUTH_ID = 'marshbox'

export function handleInitialData() {
  return (dispatch) => {
    return getInitialData().then(({ users, events, tickets }) => {
      dispatch(receiveUsers(users));
      dispatch(receiveEvents(events));
      dispatch(receiveTickets(tickets));
      dispatch(setAuthUser(AUTH_ID));
    })
  }
}
