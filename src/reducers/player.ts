import { AnyAction } from 'redux'

import { reduce } from 'ramda'

import { Player, Private } from '18dux/types'

import { PAY_PRIVATES } from '18dux/actions'

const privateRevenue = (player:Player):number =>
  reduce((total:number, priv:Private) =>
    total + priv.revenue, 0, player.privates)

const playerReducer = (player:Player, action:AnyAction):Player => {
  switch (action.type) {
  case PAY_PRIVATES:
    return {
      ...player,
      cash: player.cash + privateRevenue(player)
    }
  default:
    return player
  }
}

export default playerReducer
