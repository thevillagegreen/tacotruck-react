import React, { useEffect, useState } from 'react';
import ClickArea from './components/ClickArea';
import CapitalStore from './components/CapitalStore';
import { GameInterface, CapitalObject, UpgradeObject } from './GameInterface';
import DefaultGameState from './DefaultGameState';

const Game: React.FC = () => {
  const [GameState, setGameState] = useState<GameInterface>(DefaultGameState);

  useEffect(() => {
    const interval = setInterval(() => {
      if (GameState.ownsCapital) {
        const tacoIncrement = GameState.tacos + GameState.perInterval;
        setGameState({
          ...GameState,
          tacos: tacoIncrement,
        });
      }
    }, 100);
    return () => clearInterval(interval);
  }, [GameState]);

  const handleTacoClickIncrement = () => {
    const tacosIncrement = GameState.tacos + 1;
    setGameState(
      {
        ...GameState,
        tacos: tacosIncrement,
      },
    );
  };

  const handleCapitalPurchase = (item: CapitalObject) => {
    if (item.cost <= GameState.tacos) {
      const newCapital = {
        ...item,
        owned: item.owned + 1,
      };
      const newCapitalArr = GameState.capital;
      newCapitalArr[item.index] = newCapital;
      const perIntIncrement = GameState.perInterval + item.increment;
      setGameState(
        {
          ...GameState,
          tacos: GameState.tacos - item.cost,
          ownsCapital: true,
          perInterval: perIntIncrement,
          capital: newCapitalArr,
        },
      );
    }
  };

  const upgradePurchase = (item: UpgradeObject) => {
    console.log("placeholder");
  };

  return (
    <div className="Game">
      <div className="Game-status">
        <h3>
          { `Tacos: ${Math.floor(GameState.tacos)}` }
        </h3>
        <h3>
          { `Per second: 
            ${GameState.tacos < 100 ? Math.round(GameState.perInterval * 100) / 10 : Math.floor(GameState.perInterval) * 100}`}
        </h3>
      </div>
      <ClickArea onClick={() => handleTacoClickIncrement()} />
      <CapitalStore
        handleCapitalPurchase={handleCapitalPurchase}
        capitalArr={GameState.capital}
        tacos={GameState.tacos}
      />
    </div>
  );
};

export default Game;
