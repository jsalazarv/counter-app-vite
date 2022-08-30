import { useState } from 'react';
import propTypes from 'prop-types';

export const CounterApp = ({ value }) => {
  const [counter, setCounter] = useState(value);

  const handleAdd = () => {
    setCounter(counter + 1);
  };

  const handleSubtract = () => {
    setCounter(counter - 1);
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
          <div>{counter}</div>
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
