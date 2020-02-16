export enum PayoutMethod {
  Full = 'FULL',
  Withhold = 'WITHHOLD',
  Half = 'HALF',
  HalfRoundHoldingDown = 'HALF_ROUND_HOLDING_DOWN'
}

// This is where shares of a company can start
export enum ShareLocation {
  IPO = 'IPO',
  BankPool = 'BANK_POOL',
  Treasury = 'TREASURY'
}

export interface Rules {
  // Where do shares start?
  sharesStart:ShareLocation,

  // How many shares need to be bought to float?
  companiesFloatOn:number,

  // Does the company get money from shares in weird places?
  ipoPaysCompany:boolean,
  treasuryPaysCompany:boolean,
  bankPoolPaysCompany:boolean,

  // Which payout methods are available?
  payoutMethods:Array<PayoutMethod>
}

export interface GameRules {
  [propName:string]:Rules
}

export interface Cost {
  cost:number
}

export interface Rustable {
  rustsOn:string
}

export interface Share {
  company:string,
  percent:number,
  shares:number,
  director:boolean
}

export interface Train extends Rustable, Cost {
  name:string
}

export interface Private extends Rustable, Cost {
  revenue:number
}

export interface Player {
  id:string,
  cash:number,

  // Owned Shares and Privates
  shares:Array<Share>,
  privates:Array<Private>
}

export interface Company {
  id:string,
  cash:number,

  isFloated:boolean,

  // Owned Trains and Privates
  privates:Array<Private>,
  trains:Array<Train>

  // Shares of itself (like in 1846)
  treasury:Array<Share>,

  // Shares in the IPO
  ipo:Array<Share>,

  // Shares that it owns (like in 1841)
  shares:Array<Share>,
}

export enum State {
  Setup = 'SETUP',
  Running = 'RUNNING',
  Ended = 'ENDED'
}

export interface Store {
  state:State,

  rules:Rules,

  players:Array<Player>,
  companies:Array<Company>,

  // Bank Pool
  bankPool:Array<Share>,

  // Unowned Privates
  privates:Array<Private>,

  // Unowned Trains
  trains:Array<Train>
}
