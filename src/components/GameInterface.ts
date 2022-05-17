type CapitalObject = {
  name: string,
  display: string,
  cost: number,
  owned: number,
  factor: number,
}

type UpgradeObject = {
  name: 'placeholder';
}

export interface GameInfo {
  tacos: number;
  perInterval: number;
  capital: CapitalObject[];
  upgrades: UpgradeObject[];
}
