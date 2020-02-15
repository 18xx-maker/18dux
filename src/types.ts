export interface Player {
  id:string,
  cash:number
}

export interface Company {
  id:string,
  treasury:number
}

export enum State {
  Setup = 'SETUP',
  Running = 'RUNNING',
  Ended = 'ENDED'
}

export interface Store {
  state:State,
  players:Array<Player>,
  companies:Array<Company>
}
