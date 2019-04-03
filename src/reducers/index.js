import events from './events'
import tickets from './tickets'
import { combineReducers } from 'redux'

export default combineReducers({
  events,
  tickets
})
