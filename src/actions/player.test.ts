import * as actions from '18dux/actions'

describe('Player Actions', () => {
  test('should have name constants', () => {
    expect(actions.PLAYER_ADD).toEqual('PLAYER_ADD')
    expect(actions.PLAYER_REMOVE).toEqual('PLAYER_REMOVE')
  })

  describe('playerAdd', () => {
    test('should generate a proper action object', () => {
      expect(actions.playerAdd('Kelsin')).toEqual({
        type: actions.PLAYER_ADD,
        id: 'Kelsin'
      })
    })
  })

  describe('playerRemove', () => {
    test('should generate a proper action object', () => {
      expect(actions.playerRemove(0)).toEqual({
        type: actions.PLAYER_REMOVE,
        index: 0
      })
    })
  })
})
