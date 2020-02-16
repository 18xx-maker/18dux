import { GameRules, PayoutMethod, ShareLocation } from '18dux/types'

const rules:GameRules = {
  1817: {
    sharesStart: ShareLocation.IPO,
    companiesFloatOn: 6,
    ipoPaysCompany: false,
    treasuryPaysCompany: false,
    bankPoolPaysCompany: true,
    payoutMethods: [
      PayoutMethod.Full,
      PayoutMethod.Half,
      PayoutMethod.Withhold
    ]
  },
  1830: {
    sharesStart: ShareLocation.IPO,
    companiesFloatOn: 6,
    ipoPaysCompany: false,
    treasuryPaysCompany: false,
    bankPoolPaysCompany: true,
    payoutMethods: [PayoutMethod.Full, PayoutMethod.Withhold]
  },
  1846: {
    sharesStart: ShareLocation.Treasury,
    companiesFloatOn: 2,
    ipoPaysCompany: false,
    treasuryPaysCompany: true,
    bankPoolPaysCompany: false,
    payoutMethods: [
      PayoutMethod.Full,
      PayoutMethod.HalfRoundHoldingDown,
      PayoutMethod.Withhold
    ]
  },
  1889: {
    sharesStart: ShareLocation.IPO,
    companiesFloatOn: 5,
    ipoPaysCompany: false,
    treasuryPaysCompany: false,
    bankPoolPaysCompany: true,
    payoutMethods: [PayoutMethod.Full, PayoutMethod.Withhold]
  }
}

export default rules
