export interface CapitalObject {
  name: string,
  display: string,
  cost: number,
  owned: number,
  increment: number,
  index: number,
  priceFactor: number,
}

export interface UpgradeObject {
  name: string,
  display: string,
  cost: number,
  isOwned: boolean,
  target: CapitalObject | 'clicker',
  impactFactor: number,
}

export interface GameInterface {
  tacos: number;
  perInterval: number;
  ownsCapital: boolean;
  capital: CapitalObject[];
  upgrades?: UpgradeObject[];
}
