import { GameRules, PayoutMethod, Rules, ShareLocation } from '18dux/types'

const base:Rules = {
  sharesStart: ShareLocation.IPO,
  companiesFloatOn: 6,
  ipoPaysCompany: false,
  treasuryPaysCompany: false,
  bankPoolPaysCompany: true,
  payoutMethods: [PayoutMethod.Full, PayoutMethod.Withhold]
}

const rules:GameRules = {
  1817: {
    ...base,
    sharesStart: ShareLocation.Treasury,
    companiesFloatOn: 2,
    treasuryPaysCompany: true,
    bankPoolPaysCompany: false,
    payoutMethods: [
      PayoutMethod.Full,
      PayoutMethod.Half,
      PayoutMethod.Withhold
    ]
  },
  1830: {
    ...base
  },
  1846: {
    ...base,
    sharesStart: ShareLocation.Treasury,
    companiesFloatOn: 2,
    treasuryPaysCompany: true,
    bankPoolPaysCompany: false,
    payoutMethods: [
      PayoutMethod.Full,
      PayoutMethod.HalfRoundHoldingDown,
      PayoutMethod.Withhold
    ]
  },
  1889: {
    ...base,
    companiesFloatOn: 5
  }
}

export default rules
