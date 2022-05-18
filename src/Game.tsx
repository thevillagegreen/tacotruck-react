import React, { useEffect, useState } from 'react';
import ClickArea from './components/ClickArea';
import CapitalStore from './components/CapitalStore';
import { GameInterface } from './GameInterface';
import DefaultGameState from './DefaultGameState';

type StoreItem = {
  name: string,
  display: string,
  cost: number,
  owned: number,
  factor: number,
}

// type GameInfo = {
//   currentCount: number;
//   perInterval: number;
// }

const Game: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const [perInt, setPerInt] = useState<number>(0);
  const [stands, setStands] = useState<number>(0);
  const [rests, setRests] = useState<number>(0);

  const [GameState, setGameState] = useState<GameInterface>(DefaultGameState);

  useEffect(() => {
    const interval = setInterval(() => {
      if (stands >= 1 || rests >= 1) {
        console.log(`count: ${count}, perInt: ${perInt}`);
        setCount(count + perInt);
      }
    }, 100);
    return () => clearInterval(interval);
  }, [count]);

  const handleTacoClickIncrement = () => {
    const tacosIncrement = GameState.tacos + 1;
    setGameState(
      {
        ...GameState,
        tacos: tacosIncrement,
      },
    );
  };

  const handleCapitalPurchase = (item: StoreItem) => {
    console.log(item);
    setCount(count - item.cost);
    if (item.name === 'stand') {
      setCount(count - item.cost);
      setStands(stands + 1);
      setPerInt(perInt + 1);
    } else if (item.name === 'restaurant') {
      setRests(rests + 1);
      setPerInt(perInt + 1);
    }
  };

  const upgradePurchase = (item: StoreItem) => {
    console.log("placeholder");
  };

  return (
    <div className="Game">
      <div className="Game-status">
        <h3>
          Count:
          { Math.floor(GameState.tacos) }
        </h3>
        <h3>
          Per Interval:
          { GameState.perInterval }
        </h3>
        <h3>
          Taco stands:
          { GameState.capital[0].owned }
        </h3>
        <h3>
          Restaurants:
          { GameState.capital[1].owned }
        </h3>
      </div>
      <ClickArea onClick={() => handleTacoClickIncrement()} />
      <CapitalStore
        handleCapitalPurchase={handleCapitalPurchase}
        capitalArr={GameState.capital}
      />
    </div>
  );
};

export default Game;
