import { useState } from 'react';
import propTypes from 'prop-types';

export const CounterApp = ({ value }) => {
  const [counter, setCounter] = useState(value);
  const [animation, setAnimation] = useState('');

  const resetAnimation = () => {
    setTimeout(() => {
      setAnimation('');
    }, 500);
  };

  const handleAdd = () => {
    setCounter(counter + 1);
    setAnimation('flip-up');
    resetAnimation();
  };

  const handleSubtract = () => {
    setCounter(counter - 1);
    setAnimation('flip-down');
    resetAnimation();
  };

  const handleReset = () => {
    setCounter(value);
  };

  return (
    <>
      <div className="wrapper">
        <div className="counter-container">
          <button
            aria-label="subtract"
            className="counter-button subtract"
            onClick={handleSubtract}>
            -
          </button>
          <div className="flipper-container">
            <div className={`counter ${animation}`}>
              <span>{counter}</span>
            </div>
          </div>
          <button
            aria-label="add"
            className="counter-button add"
            onClick={handleAdd}>
            +
          </button>
        </div>
        <button
          aria-label="reload"
          className="counter-button reload"
          onClick={handleReset}>
          Reset
        </button>
      </div>
    </>
  );
};

CounterApp.propTypes = {
  value: propTypes.number.isRequired,
};

CounterApp.defaultProps = {
  value: null,
};
