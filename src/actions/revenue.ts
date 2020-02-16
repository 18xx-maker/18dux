import { State } from '18dux/types'

export const REVENUE = 'REVENUE'
export const PAY_PRIVATES = 'PAY_PRIVATES'

export const revenueFullPay = (company:string, earnings:number) => ({
  type: REVENUE,
  company,
  earnings,
  percent: 1.0
})

export const revenueHalfPay = (company:string, earnings:number) => ({
  type: REVENUE,
  company,
  earnings,
  percent: 0.5
})

export const revenueWithhold = (company:string, earnings:number) => ({
  type: REVENUE,
  company,
  earnings,
  percent: 0
})

export const revenueCustomPay = (company:string, earnings:number, percent:number) => ({
  type: REVENUE,
  company,
  earnings,
  percent
})

export const payPrivates = () => ({
  type: PAY_PRIVATES
})

export const revenueStates = {
  [State.Setup]: [],
  [State.Running]: [PAY_PRIVATES, REVENUE],
  [State.Ended]: []
}
