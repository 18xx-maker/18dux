import * as actions from "18dux/actions";

describe('Revenue Actions', () => {
  test('should have name constants', () => {
    expect(actions.REVENUE).toEqual("REVENUE");
  });

  describe('revenue_full_pay', () => {
    test('should generate a proper action object', () => {
      expect(actions.revenue_full_pay("B&M", 100)).toEqual({
        type: actions.REVENUE,
        company: "B&M",
        earnings: 100,
        percent: 1.0
      });
    });
  });

  describe('revenue_half_pay', () => {
    test('should generate a proper action object', () => {
      expect(actions.revenue_half_pay("B&M", 100)).toEqual({
        type: actions.REVENUE,
        company: "B&M",
        earnings: 100,
        percent: 0.5
      });
    });
  });

  describe('revenue_withhold', () => {
    test('should generate a proper action object', () => {
      expect(actions.revenue_withhold("B&M", 100)).toEqual({
        type: actions.REVENUE,
        company: "B&M",
        earnings: 100,
        percent: 0
      });
    });
  });

  describe('revenue_custom_pay', () => {
    test('should generate a proper action object', () => {
      expect(actions.revenue_custom_pay("B&M", 100, 0.25)).toEqual({
        type: actions.REVENUE,
        company: "B&M",
        earnings: 100,
        percent: 0.25
      });
    });
  });
});
