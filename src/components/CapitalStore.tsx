import React from 'react';
import './CapitalStore.css';
import { CapitalObject } from '../GameInterface';

type StoreItem = {
  name: string,
  display: string,
  cost: number,
  owned: number,
  factor: number,
}

// const StoreData = [
//   {
//     name: 'stand',
//     display: 'Taco Stand',
//     cost: 10,
//     owned: 0,
//     factor: 1.15,
//   }, {
//     name: 'restaurant',
//     display: 'Taco Restaurant',
//     cost: 50,
//     owned: 0,
//     factor: 1.15,
//   },
// ];

type StoreProps = {
  handleCapitalPurchase?: (item: StoreItem) => void;
  capitalArr: CapitalObject[];
}

const Store: React.FC<StoreProps> = ({
  handleCapitalPurchase = (item: StoreItem) => {},
  capitalArr = [],
}) => {
  const purchaseCapital = (item: StoreItem) => {
    handleCapitalPurchase(item);
  };

  console.log(capitalArr);
  return (
    <div className="Store">
      <h3>Buy capital:</h3>
      <div className="Store-buttons">
        {capitalArr.map((object, i) => (
          <button type="button" onClick={() => purchaseCapital(object)}>
            {object.name}
          </button>
        ))}
      </div>
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
