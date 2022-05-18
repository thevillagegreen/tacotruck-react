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
};

export default DefaultGameState;
