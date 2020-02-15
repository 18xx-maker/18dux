import { State } from '18dux/types'
import { playerStates } from '18dux/actions/player'
import { revenueStates } from '18dux/actions/revenue'
import { stateStates } from '18dux/actions/state'

export * from '18dux/actions/state'
export * from '18dux/actions/player'
export * from '18dux/actions/revenue'

const combineStates = (state:State) => [
  ...stateStates[state],
  ...playerStates[state],
  ...revenueStates[state]
]

export const states = {
  [State.Setup]: combineStates(State.Setup),
  [State.Running]: combineStates(State.Running),
  [State.Ended]: combineStates(State.Ended)
}
