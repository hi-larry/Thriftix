import { getInitialData } from '../utils/api'
import { receiveEvents } from

export function handleInitialData() {
  return (dispatch) => {
    return getInitialData().then(({ users, events }) => {
      dispatch(receiveUsers(users));
      dispatch(receiveEvents(events));
    })
  }
}
