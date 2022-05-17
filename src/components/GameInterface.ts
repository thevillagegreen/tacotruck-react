interface CapitalObject {
  name: string,
  display: string,
  cost: number,
  owned: number,
  factor: number,
}

interface UpgradeObject {
  name: 'placeholder';
}

export interface GameInfo {
  tacos: number;
  perInterval: number;
  capital: CapitalObject[];
  upgrades: UpgradeObject[];
}
