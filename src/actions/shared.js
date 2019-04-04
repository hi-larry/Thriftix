import { getInitialData } from '../utils/api'
import { receiveEvents } from '../actions/events'
import { receiveUsers } from '../actions/users'
import { setAuthUser } from './authUser'

const AUTH_ID = 'marshbox'

export function handleInitialData() {
  return (dispatch) => {
    return getInitialData().then(({ users, events }) => {
      dispatch(receiveUsers(users));
      dispatch(receiveEvents(events));
      dispatch(setAuthUser(AUTH_ID));
    })
  }
}
