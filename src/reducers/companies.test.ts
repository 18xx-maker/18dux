import companiesReducer from '18dux/reducers/companies'
import { Company } from '18dux/types'

const Boston:Company = { id: 'B&M', cash: 0, shares: [], privates: [] }
const unknown = { type: 'unknown' }

describe('CompaniesReducer', () => {
  describe('Unknown action', () => {
    test('should initialize with an empty player list', () => {
      expect(companiesReducer(undefined, unknown)).toEqual([])
    })

    test('should do nothing with an unknown action', () => {
      expect(companiesReducer([Boston], unknown)).toEqual([Boston])
    })
  })
})
