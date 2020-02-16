import { AnyAction } from 'redux'

import { map } from 'ramda'

import { Company } from '18dux/types'
import companyReducer from '18dux/reducers/company'

const companiesReducer = (companies:Array<Company> = [], action:AnyAction):Array<Company> => {
  switch (action.type) {
  default:
    return map(company => companyReducer(company, action), companies)
  }
}

export default companiesReducer
