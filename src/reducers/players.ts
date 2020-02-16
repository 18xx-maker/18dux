import { AnyAction } from 'redux'

import { map, remove } from 'ramda'

import { Player } from '18dux/types'
import { PLAYER_ADD, PLAYER_REMOVE } from '18dux/actions'
import playerReducer from '18dux/reducers/player'

const playersReducer = (players:Array<Player> = [], action:AnyAction):Array<Player> => {
  switch (action.type) {
  case PLAYER_ADD:
    return [
      ...players,
      {
        id: action.id,
        cash: 0,
        shares: [],
        privates: []
      }
    ]
  case PLAYER_REMOVE:
    return remove(action.index, 1, players)
  default:
    return map(player => playerReducer(player, action), players)
  }
}

export default playersReducer
