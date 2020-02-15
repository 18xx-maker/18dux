import { combineReducers } from 'redux'
import players from '18dux/reducers/players'
import state from '18dux/reducers/state'
// import companies from "18dux/reducers/companies"

export default combineReducers({
  state,
  players
})
