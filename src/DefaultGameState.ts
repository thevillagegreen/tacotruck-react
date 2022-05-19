import { GameInterface } from './GameInterface';

const DefaultGameState: GameInterface = {
  tacos: 0,
  perInterval: 0,
  ownsCapital: false,
  capital: [
    {
      index: 0,
      name: 'stand',
      display: 'Taco Stand',
      cost: 10,
      owned: 0,
      increment: 0.01,
      priceFactor: 1.4,
    }, {
      index: 1,
      name: 'restaurant',
      display: 'Taco Restaurant',
      cost: 50,
      owned: 0,
      increment: 0.05,
      priceFactor: 1.6,
    },
  ],
  upgrades: [
    {
      index: 0,
      name: 'Double stand production',
      cost: 20,
      isOwned: false,
      metThreshold: false,
      targetCapitalIndex: 0,
      impactFactor: 2,
      displayThreshold: 10,
    }, {
      index: 1,
      name: 'Double stand production 2',
      cost: 120,
      isOwned: false,
      metThreshold: false,
      targetCapitalIndex: 0,
      impactFactor: 2,
      displayThreshold: 100,
    }, {
      index: 2,
      name: 'Double stand production 3',
      cost: 250,
      isOwned: false,
      metThreshold: false,
      targetCapitalIndex: 0,
      impactFactor: 2,
      displayThreshold: 150,
    },
  ],
};

export default DefaultGameState;
