export interface CapitalObject {
  name: string,
  display: string,
  cost: number,
  owned: number,
  increment: number,
  index: number,
}

export interface UpgradeObject {
  name: 'placeholder';
}

export interface GameInterface {
  tacos: number;
  perInterval: number;
  ownsCapital: boolean;
  capital: CapitalObject[];
  upgrades?: UpgradeObject[];
}
