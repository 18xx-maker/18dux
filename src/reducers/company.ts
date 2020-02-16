import { AnyAction } from 'redux'
import { reduce } from 'ramda'

import { Company, Private } from '18dux/types'
import { PAY_PRIVATES } from '18dux/actions'

const privateRevenue = (company:Company):number =>
  reduce((total:number, priv:Private) =>
    total + priv.revenue, 0, company.privates)

const companyReducer = (company:Company, action:AnyAction):Company => {
  switch (action.type) {
  case PAY_PRIVATES:
    return {
      ...company,
      cash: company.cash + privateRevenue(company)
    }
  default:
    return company
  }
}

export default companyReducer
