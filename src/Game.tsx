import React, { useState } from 'react';
import ClickArea from './components/ClickArea';

const Game: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const handleChange = () => {
    setCount(count + 1);
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
    </div>
  );
};

export default Game;
