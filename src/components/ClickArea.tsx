import React from 'react';
import './ClickArea.css';

type ClickAreaProps = {
  onClick?: () => void;
}

const ClickArea: React.FC<ClickAreaProps> = ({
  onClick = () => {},
}) => {
  const handleClick = () => {
    onClick();
  };

  return (
    <div className="ClickArea">
      <img
        onClick={handleClick}
        src="https://i.imgur.com/CvsAvBa.png"
        alt="taco"
      />
    </div>
  );
};

export default ClickArea;
