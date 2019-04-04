import events from './events'
import tickets from './tickets'
import users from './users'
import authUser from './authUser'
import { combineReducers } from 'redux'

export default combineReducers({
  authUser,
  users,
  events
})
