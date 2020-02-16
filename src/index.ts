import { createStore, applyMiddleware, Store, Middleware, MiddlewareAPI, Dispatch, AnyAction } from 'redux'
import { State } from '18dux/types'
import * as actions from '18dux/actions'
import rules from '18dux/rules'
import rootReducer from '18dux/reducers'

const statesMiddleware:Middleware = ({ getState }:MiddlewareAPI) => (next:Dispatch<AnyAction>) => (action:AnyAction) => {
  const currentState:State = getState().state

  // Is the action we're running good for the current state?
  if (actions.states[currentState].includes(action.type)) {
    // We're good!
    return next(action)
  }
}

export const store:Store = createStore(rootReducer, applyMiddleware(statesMiddleware))

export { actions, rules }
