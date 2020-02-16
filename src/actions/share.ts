import { State, AgentId, ShareId } from '18dux/types'

export const BUY_SHARE = 'BUY_SHARE'
export const SELL_SHARE = 'SELL_SHARE'

export const buyShare = (shareId:ShareId, agentId:AgentId) => ({
  type: BUY_SHARE,
  shareId,
  agentId
})

// Selling shares always goes to the bankpool
export const sellShare = (shareIds:Array<ShareId>) => ({
  type: SELL_SHARE,
  shareIds
})

export const shareStates = {
  [State.Setup]: [],
  [State.Running]: [BUY_SHARE, SELL_SHARE],
  [State.Ended]: []
}
