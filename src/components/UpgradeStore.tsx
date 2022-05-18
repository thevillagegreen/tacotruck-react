import React from 'react';
import './UpgradeStore.css';

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
      {/* <div className="Store-buttons">
        <button type="button" onClick={() => purchaseCapital(StoreData[0])}>Buy Taco Stand - 100</button>
      </div> */}
      <div className='Store-inventory'>
        <h3>
          Taco stands:
          { 10 }
        </h3>
        <h3>
          Restaurants:
          { 10 }
        </h3>
      </div>
    </div>
  );
};

export default Store;
