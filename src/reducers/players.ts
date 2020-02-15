import { AnyAction } from 'redux'

import { remove } from 'ramda'

import { Player } from '18dux/types'
import { PLAYER_ADD, PLAYER_REMOVE } from '18dux/actions'

const playersReducer = (players:Array<Player> = [], action:AnyAction):Array<Player> => {
  switch (action.type) {
    case PLAYER_ADD:
      return [...players, { id: action.id, cash: 0 }]
    case PLAYER_REMOVE:
      return remove(action.index, 1, players)
    default:
      return players
  }
}

export default playersReducer
