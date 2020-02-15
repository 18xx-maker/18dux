export const REVENUE = 'REVENUE'

export const revenueFullPay = (company, earnings) => ({
  type: REVENUE,
  company,
  earnings,
  percent: 1.0
})

export const revenueHalfPay = (company, earnings) => ({
  type: REVENUE,
  company,
  earnings,
  percent: 0.5
})

export const revenueWithhold = (company, earnings) => ({
  type: REVENUE,
  company,
  earnings,
  percent: 0
})

export const revenueCustomPay = (company, earnings, percent) => ({
  type: REVENUE,
  company,
  earnings,
  percent
})
