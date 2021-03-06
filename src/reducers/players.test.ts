import playersReducer from '18dux/reducers/players'
import { playerAdd, playerRemove } from '18dux/actions'
import { Player } from '18dux/types'

const Kelsin:Player = { id: 'Kelsin', cash: 0, shares: [], privates: [] }
const addKelsin = playerAdd('Kelsin')
const remove0 = playerRemove(0)
const remove99 = playerRemove(99)
const unknown = { type: 'unknown' }

describe('PlayersReducer', () => {
  describe('Unknown action', () => {
    test('should initialize with an empty player list', () => {
      expect(playersReducer(undefined, unknown)).toEqual([])
    })

    test('should do nothing with an unknown action', () => {
      expect(playersReducer([Kelsin], unknown)).toEqual([Kelsin])
    })
  })

  describe('PLAYER_ADD action', () => {
    test('should add a player to an empty players list', () => {
      expect(playersReducer([], addKelsin))
        .toEqual([Kelsin])
    })
  })

  describe('PLAYER_REMOVE action', () => {
    test('should do nothing to an empty players list', () => {
      expect(playersReducer([], remove0))
        .toEqual([])
    })

    test('should remove a player from a certain index', () => {
      expect(playersReducer([Kelsin], remove0))
        .toEqual([])
    })

    test('should do nothing when removing a high index', () => {
      expect(playersReducer([Kelsin], remove99))
        .toEqual([Kelsin])
    })
  })
})
