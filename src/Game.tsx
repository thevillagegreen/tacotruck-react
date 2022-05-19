import React, { useEffect, useState } from 'react';
import ClickArea from './components/ClickArea';
import CapitalStore from './components/CapitalStore';
import { GameInterface, CapitalObject, UpgradeObject } from './GameInterface';
import DefaultGameState from './DefaultGameState';
import UpgradeStore from './components/UpgradeStore';

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

  const handleUpgradeThreholds = () => {
    const newUpgradesArr = GameState.upgrades;
    GameState.upgrades.forEach((obj, i) => {
      if (GameState.tacos > obj.displayThreshold) {
        newUpgradesArr[i] = {
          ...obj,
          metThreshold: true,
        };
      }
    });
    setGameState(
      {
        ...GameState,
        upgrades: newUpgradesArr,
      },
    );
  };

  const handleCapitalPurchase = (item: CapitalObject) => {
    if (item.cost <= GameState.tacos) { // is this needed?
      handleUpgradeThreholds();
      const newCapital = {
        ...item,
        owned: item.owned + 1,
        cost: Math.floor(item.cost + item.priceFactor),
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

  const handleUpgradePurchase = (item: UpgradeObject) => {
    if (item.cost <= GameState.tacos) { // is this needed?
      handleUpgradeThreholds();
      const oldIncrement = GameState.capital[item.targetCapitalIndex].increment;
      const newCapital: CapitalObject = {
        ...GameState.capital[item.targetCapitalIndex],
        increment: oldIncrement * item.impactFactor,
      };
      const newCapitalArr = GameState.capital;
      newCapitalArr[item.targetCapitalIndex] = newCapital;
      const addPerInterval = oldIncrement * GameState.capital[item.targetCapitalIndex].owned;
      const newUpgrade: UpgradeObject = {
        ...GameState.upgrades[item.index],
        isOwned: true,
      };
      const newUpgradeArr = GameState.upgrades;
      newUpgradeArr[item.index] = newUpgrade;
      setGameState(
        {
          ...GameState,
          tacos: GameState.tacos - item.cost,
          perInterval: GameState.perInterval + addPerInterval,
          capital: newCapitalArr,
          upgrades: newUpgradeArr,
        },
      );
    }
    console.log(GameState.upgrades);
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
      <UpgradeStore
        handleUpgradePurchase={handleUpgradePurchase}
        upgradesArr={GameState.upgrades}
        tacos={GameState.tacos}
      />
    </div>
  );
};

export default Game;
