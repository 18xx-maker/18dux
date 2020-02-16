import { AnyAction } from 'redux'

import { State } from '18dux/types'
import { START, END } from '18dux/actions'

const stateReducer = (state:State = State.Setup, action:AnyAction):State => {
  switch (action.type) {
  case START:
    return State.Running
  case END:
    return State.Ended
  default:
    return state
  }
}

export default stateReducer
