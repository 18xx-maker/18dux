import { AnyAction } from 'redux'
import { reduce } from 'ramda'

import { Company, Private } from '18dux/types'
import { PAY_PRIVATES } from '18dux/actions'

const companyReducer = (company:Company, action:AnyAction):Company => {
  switch (action.type) {
  case PAY_PRIVATES:
    return {
      ...company,
      cash: company.cash + reduce((total:number, priv:Private) => {
        return total + priv.revenue
      }, 0, company.privates)
    }
  default:
    return company
  }
}

export default companyReducer
