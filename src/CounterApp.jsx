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
      <button onClick={handleSubtract}>-1</button>
      <div>{counter}</div>
      <button onClick={handleAdd}>+1</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
};

CounterApp.propTypes = {
  value: propTypes.number.isRequired,
};

CounterApp.defaultProps = {
  value: null,
};
