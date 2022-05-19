import React from 'react';
import './UpgradeStore.css';
import { UpgradeObject } from '../GameInterface';

type StoreProps = {
  handleUpgradePurchase: (item: UpgradeObject) => void;
  upgradesArr: UpgradeObject[];
  tacos: number;
}

const upgradesDisplay = (upgradesArr: UpgradeObject[], tacos: number): UpgradeObject[] => {
  const displayArr: UpgradeObject[] = [];
  upgradesArr.forEach((obj) => {
    if ((obj.displayThreshold < tacos || obj.metThreshold) && !obj.isOwned) {
      displayArr.push(obj);
    }
  });
  return displayArr;
};

const UpgradeStore: React.FC<StoreProps> = ({
  handleUpgradePurchase = (item: UpgradeObject) => {},
  upgradesArr = [],
  tacos = 0,
}) => {
  const purchaseUpgrade = (item: UpgradeObject) => {
    handleUpgradePurchase(item);
  };

  return (
    <div className="UpgradeStore">
      <h3>Buy upgrades:</h3>
      <div className="UpgradeStore-buttons">
        {upgradesDisplay(upgradesArr, tacos).map((object) => (
          <button disabled={object.cost > tacos} type="button" onClick={() => purchaseUpgrade(object)}>
            { `${object.name} - ${object.cost}` }
          </button>
        ))}
      </div>
    </div>
  );
};

export default UpgradeStore;
