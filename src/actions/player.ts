export const PLAYER_ADD = 'PLAYER_ADD'
export const PLAYER_REMOVE = 'PLAYER_REMOVE'

export const playerAdd = (name:string) => ({
  type: PLAYER_ADD,
  name
})

export const playerRemove = (index:number) => ({
  type: PLAYER_REMOVE,
  index
})
