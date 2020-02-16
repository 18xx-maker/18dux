import { AnyAction } from 'redux'

import { reduce } from 'ramda'

import { Player, Private } from '18dux/types'

import { PAY_PRIVATES } from '18dux/actions'

const playerReducer = (player:Player, action:AnyAction):Player => {
  switch (action.type) {
  case PAY_PRIVATES:
    return {
      ...player,
      cash: player.cash + reduce((total:number, priv:Private) => {
        return total + priv.revenue
      }, 0, player.privates)
    }
  default:
    return player
  }
}

export default playerReducer
