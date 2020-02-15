export interface Player {
  id:string,
  cash:number
}

export interface Company {
  id:string,
  treasury:number
}

export interface Store {
  players:Array<Player>,
  companies:Array<Company>
}
