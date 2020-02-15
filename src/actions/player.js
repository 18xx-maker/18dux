export const PLAYER_ADD = 'PLAYER_ADD'
export const PLAYER_REMOVE = 'PLAYER_REMOVE'

export const playerAdd = (name) => ({
  type: PLAYER_ADD,
  name
})

export const playerRemove = (index) => ({
  type: PLAYER_REMOVE,
  index
})
