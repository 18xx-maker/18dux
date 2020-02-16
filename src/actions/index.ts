import { State } from '18dux/types'

import { playerStates } from '18dux/actions/player'
import { revenueStates } from '18dux/actions/revenue'
import { shareStates } from '18dux/actions/share'
import { stateStates } from '18dux/actions/state'

export * from '18dux/actions/player'
export * from '18dux/actions/revenue'
export * from '18dux/actions/share'
export * from '18dux/actions/state'

const combineStates = (state:State) => [
  ...playerStates[state],
  ...revenueStates[state],
  ...shareStates[state],
  ...stateStates[state]
]

export const states = {
  [State.Setup]: combineStates(State.Setup),
  [State.Running]: combineStates(State.Running),
  [State.Ended]: combineStates(State.Ended)
}
