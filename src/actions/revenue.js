export const REVENUE = "REVENUE";

export const revenue_full_pay = (company, earnings) => ({
  type: REVENUE,
  company,
  earnings,
  percent: 1.0
});

export const revenue_half_pay = (company, earnings) => ({
  type: REVENUE,
  company,
  earnings,
  percent: 0.5
});

export const revenue_withhold = (company, earnings) => ({
  type: REVENUE,
  company,
  earnings,
  percent: 0
});

export const revenue_custom_pay = (company, earnings, percent) => ({
  type: REVENUE,
  company,
  earnings,
  percent
});
