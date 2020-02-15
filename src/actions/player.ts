import { State } from '18dux/types'

export const PLAYER_ADD = 'PLAYER_ADD'
export const PLAYER_REMOVE = 'PLAYER_REMOVE'

export const playerAdd = (id:string) => ({
  type: PLAYER_ADD,
  id
})

export const playerRemove = (index:number) => ({
  type: PLAYER_REMOVE,
  index
})

export const playerStates = {
  [State.Setup]: [PLAYER_ADD, PLAYER_REMOVE],
  [State.Running]: [],
  [State.Ended]: []
}
