import React from 'react';
import './CapitalStore.css';
import { CapitalObject } from '../GameInterface';

type StoreProps = {
  handleCapitalPurchase: (item: CapitalObject) => void;
  capitalArr: CapitalObject[];
  tacos: number;
}

const CapitalStore: React.FC<StoreProps> = ({
  handleCapitalPurchase = (item: CapitalObject) => {},
  capitalArr = [],
  tacos = 0,
}) => {
  const purchaseCapital = (item: CapitalObject) => {
    handleCapitalPurchase(item);
  };
  return (
    <div className="CapitalStore">
      <h3>Buy capital:</h3>
      <div className="CapitalStore-buttons">
        {capitalArr.map((object) => (
          <button disabled={object.cost > tacos} type="button" onClick={() => purchaseCapital(object)}>
            { `${object.name} - ${object.cost}` }
          </button>
        ))}
      </div>
      <div className="CapitalStore-inventory">
        {capitalArr.map((object) => (
          <div>
            {/* TODO add tenary if for formating numbers < 100 */}
            <h3>{ `${object.display} owned: ${object.owned}` }</h3>
            <h3>{ `${object.display} making: ${Math.floor((object.owned * (object.increment * 100))) / 10} per second.` }</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CapitalStore;
