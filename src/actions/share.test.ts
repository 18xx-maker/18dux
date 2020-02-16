import { Agent, AgentId, ShareId, ShareLocation } from '18dux/types'

import * as actions from '18dux/actions'

const agentId:AgentId = {
  agent: Agent.Player,
  id: 'Kelsin'
}

const shareId:ShareId = {
  index: 0,
  location: ShareLocation.BankPool
}

describe('Share Actions', () => {
  test('should have name constants', () => {
    expect(actions.BUY_SHARE).toEqual('BUY_SHARE')
    expect(actions.SELL_SHARE).toEqual('SELL_SHARE')
  })

  describe('buyShare', () => {
    test('should generate a proper action object', () => {
      expect(actions.buyShare(shareId, agentId)).toEqual({
        type: actions.BUY_SHARE,
        agentId,
        shareId
      })
    })
  })

  describe('sellShare', () => {
    test('should generate a proper action object', () => {
      expect(actions.sellShare([shareId])).toEqual({
        type: actions.SELL_SHARE,
        shareIds: [shareId]
      })
    })
  })
})
