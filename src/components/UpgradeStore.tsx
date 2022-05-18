import React from 'react';
import './UpgradeStore.css';
import { UpgradeObject } from '../GameInterface';

type StoreProps = {
  storePurchase?: (item: UpgradeObject) => void;
}

const UpgradeStore: React.FC<StoreProps> = ({
  storePurchase = (item: UpgradeObject) => {},
}) => {
  const purchaseUpgrade = (item: UpgradeObject) => {
    storePurchase(item);
  };

  return (
    <div className="UpgradeStore">
      <h3>Store</h3>
      <div className="UpgradeStore-inventory">
        <h3>placeholder</h3>
      </div>
    </div>
  );
};

export default UpgradeStore;
