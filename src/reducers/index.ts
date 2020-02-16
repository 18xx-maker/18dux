import { combineReducers } from 'redux'
import companies from '18dux/reducers/companies'
import players from '18dux/reducers/players'
import state from '18dux/reducers/state'

export default combineReducers({
  companies,
  state,
  players
})
