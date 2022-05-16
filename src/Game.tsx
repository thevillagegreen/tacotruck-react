import React, { useState } from 'react';
import ClickArea from './components/ClickArea';
import Store from './components/Store';

type StoreItem = {
  name: string,
  display: string,
  cost: number,
  owned: number,
  factor: number,
}

const Game: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const [perSec, setPerSec] = useState<number>(0);

  const handleChange = () => {
    setCount(count + 1);
  };

  const storePurchase = (cost: number) => {
    // check if item can be afforded
    console.log(cost);
  };

  return (
    <div className="Game">
      <div className="Game-status">
        <h3>
          Count:
          { count }
        </h3>
      </div>
      <ClickArea onClick={handleChange} />
      <Store count={count} storePurchase={storePurchase} />
    </div>
  );
};

export default Game;
