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
  cost: number,
  isOwned: boolean,
  targetCapitalIndex: number,
  impactFactor: number,
  index: number,
  displayThreshold: number,
  metThreshold: boolean,
}

export interface GameInterface {
  tacos: number;
  perInterval: number;
  ownsCapital: boolean;
  capital: CapitalObject[];
  upgrades: UpgradeObject[];
}
