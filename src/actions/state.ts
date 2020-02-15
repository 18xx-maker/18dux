import { State } from '18dux/types'

export const START = 'START'
export const END = 'END'

export const start = () => ({
  type: START
})

export const end = () => ({
  type: END
})

export const stateStates = {
  [State.Setup]: [START],
  [State.Running]: [END],
  [State.Ended]: []
}
