import companyReducer from '18dux/reducers/company'
import { payPrivates } from '18dux/actions'
import { Company } from '18dux/types'

const Boston:Company = {
  id: 'B&M',
  cash: 0,
  privates: [{
    revenue: 5
  }]
}
const BostonPaid:Company = { ...Boston, cash: 5 }

const GrandTrunk:Company = {
  id: 'GT',
  cash: 90,
  privates: [{
    revenue: 5
  }, {
    revenue: 10
  }]
}
const GrandTrunkPaid:Company = { ...GrandTrunk, cash: 105 }

const NewYorkCentral:Company = {
  id: 'NYC',
  cash: 225,
  shares: [],
  privates: []
}

const unknown = { type: 'unknown' }

describe('CompanyReducer', () => {
  describe('Unknown action', () => {
    test('should do nothing with an unknown action', () => {
      expect(companyReducer(Boston, unknown)).toEqual(Boston)
    })
  })

  describe('PAY_PRIVATES action', () => {
    test('should pay a single private revenue', () => {
      expect(companyReducer(Boston, payPrivates())).toEqual(BostonPaid)
    })

    test('should pay multiple private revenues', () => {
      expect(companyReducer(GrandTrunk, payPrivates())).toEqual(GrandTrunkPaid)
    })

    test('should do nothing with no privates', () => {
      expect(companyReducer(NewYorkCentral, payPrivates())).toEqual(NewYorkCentral)
    })
  })
})
