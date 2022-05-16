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
  storePurchase?: (item: StoreItem) => void;
}

const Store: React.FC<StoreProps> = ({
  storePurchase = (item: StoreItem) => {},
}) => {
  const purchaseCapital = (item: StoreItem) => {
    storePurchase(item);
  };

  return (
    <div className="Store">
      <h3>Store</h3>
      <button type="button" onClick={() => purchaseCapital(StoreData[0])}>Buy Taco Stand - 100</button>
    </div>
  );
};

export default Store;
