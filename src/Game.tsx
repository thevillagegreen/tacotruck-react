import React, { useEffect, useState } from 'react';
import ClickArea from './components/ClickArea';
import Store from './components/Store';

type StoreItem = {
  name: string,
  display: string,
  cost: number,
  owned: number,
  factor: number,
}

type GameInfo = {
  currentCount: number;
  perInterval: number;
}

const Game: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const [perInt, setPerInt] = useState<number>(0);
  const [stands, setStands] = useState<number>(0);
  const [rests, setRests] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (stands >= 1 || rests >= 1) {
        console.log(`count: ${count}, perInt: ${perInt}`);
        setCount(count + perInt);
      }
    }, 100);
    return () => clearInterval(interval);
  }, [count]);

  const handleChange = () => {
    setCount(count + 1);
  };

  const storePurchase = (item: StoreItem) => {
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

  return (
    <div className="Game">
      <div className="Game-status">
        <h3>
          Count:
          { Math.floor(count) }
        </h3>
        <h3>
          Per Interval:
          { perInt }
        </h3>
        <h3>
          Taco stands:
          { stands }
        </h3>
        <h3>
          Restaurants:
          { rests }
        </h3>
      </div>
      <ClickArea onClick={handleChange} />
      <Store
        storePurchase={storePurchase}
      />
    </div>
  );
};

export default Game;
