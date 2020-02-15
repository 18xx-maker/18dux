import * as actions from '18dux/actions'

describe('Revenue Actions', () => {
  test('should have name constants', () => {
    expect(actions.REVENUE).toEqual('REVENUE')
  })

  describe('revenueFullPay', () => {
    test('should generate a proper action object', () => {
      expect(actions.revenueFullPay('B&M', 100)).toEqual({
        type: actions.REVENUE,
        company: 'B&M',
        earnings: 100,
        percent: 1.0
      })
    })
  })

  describe('revenueHalfPay', () => {
    test('should generate a proper action object', () => {
      expect(actions.revenueHalfPay('B&M', 100)).toEqual({
        type: actions.REVENUE,
        company: 'B&M',
        earnings: 100,
        percent: 0.5
      })
    })
  })

  describe('revenueWithhold', () => {
    test('should generate a proper action object', () => {
      expect(actions.revenueWithhold('B&M', 100)).toEqual({
        type: actions.REVENUE,
        company: 'B&M',
        earnings: 100,
        percent: 0
      })
    })
  })

  describe('revenueCustomPay', () => {
    test('should generate a proper action object', () => {
      expect(actions.revenueCustomPay('B&M', 100, 0.25)).toEqual({
        type: actions.REVENUE,
        company: 'B&M',
        earnings: 100,
        percent: 0.25
      })
    })
  })
})
