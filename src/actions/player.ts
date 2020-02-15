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
