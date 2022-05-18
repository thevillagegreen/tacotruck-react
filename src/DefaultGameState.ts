import { GameInterface } from './GameInterface';

let DefaultGameState: GameInterface;

DefaultGameState = {
  tacos: 0,
  perInterval: 0,
  capital: [
    {
      name: 'stand',
      display: 'Taco Stand',
      cost: 10,
      owned: 0,
      factor: 1.15,
    }, {
      name: 'restaurant',
      display: 'Taco Restaurant',
      cost: 50,
      owned: 0,
      factor: 1.15,
    },
  ],
};

export default DefaultGameState;
