import React from 'react';
import './Store.css';

type StoreItem = {
  name: string,
  display: string,
  cost: number,
  owned: number,
  factor: number,
}

const StoreData = [
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
];

type StoreProps = {
  count: number;
  storePurchase?: (cost: number) => void;
}

const Store: React.FC<StoreProps> = ({
  storePurchase = (cost: number) => {},
  count = 0,
}) => {
  const purchaseStand = () => {
    storePurchase(StoreData[1].cost);
  };

  return (
    <div className="Store">
      <h3>Store</h3>
      <button type="button" onClick={purchaseStand}>Buy Taco Stand - 100</button>
    </div>
  );
};

export default Store;
