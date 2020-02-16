import playerReducer from '18dux/reducers/player'
import { payPrivates } from '18dux/actions'
import { Player } from '18dux/types'

const Kelsin:Player = {
  id: 'Kelsin',
  cash: 0,
  shares: [],
  privates: [{
    revenue: 5
  }]
}
const KelsinPaid:Player = {
  id: 'Kelsin',
  cash: 5,
  shares: [],
  privates: [{
    revenue: 5
  }]
}

const Ayashi:Player = {
  id: 'Ayashi',
  cash: 90,
  shares: [],
  privates: [{
    revenue: 5
  }, {
    revenue: 10
  }]
}
const AyashiPaid:Player = {
  id: 'Ayashi',
  cash: 105,
  shares: [],
  privates: [{
    revenue: 5
  }, {
    revenue: 10
  }]
}

const Lily:Player = {
  id: 'Lily',
  cash: 225,
  shares: [],
  privates: []
}

const unknown = { type: 'unknown' }

describe('PlayerReducer', () => {
  describe('Unknown action', () => {
    test('should do nothing with an unknown action', () => {
      expect(playerReducer(Kelsin, unknown)).toEqual(Kelsin)
    })
  })

  describe('PAY_PRIVATES action', () => {
    test('should pay a single private revenue', () => {
      expect(playerReducer(Kelsin, payPrivates())).toEqual(KelsinPaid)
    })

    test('should pay multiple private revenues', () => {
      expect(playerReducer(Ayashi, payPrivates())).toEqual(AyashiPaid)
    })

    test('should do nothing with no privates', () => {
      expect(playerReducer(Lily, payPrivates())).toEqual(Lily)
    })
  })
})
