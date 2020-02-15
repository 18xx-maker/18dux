import { Store, createStore } from 'redux'
import * as actions from '18dux/actions'
import rootReducer from '18dux/reducers'

export const store:Store = createStore(rootReducer)

export { actions }
