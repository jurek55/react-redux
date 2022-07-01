import React from 'react';
import { INCREASE, DECREASE, RESET } from '../actions/appActions';

import { connect } from 'react-redux';
const Counter = ({ value, counterIncrease, counterDecrease, counterReset }) => {
  return (
    <>
      <h1>Licznik</h1>
      <h2>{value}</h2>
      <div className="buttons">
        <button onClick={counterDecrease}>zmniejsz stan licznika o 1</button>
        <button onClick={counterReset}>resetuj licznik</button>
        <button onClick={counterIncrease}>zwiększ stan licznika o 1</button>
      </div>
    </>
  );
};

const mapStateToProps = (store) => {
  console.log(store.value, 'statevalue');
  return {
    value: store.counter.value,
  };
};

const mapActionsToProps = (dispatch) => {
  return {
    counterIncrease: () => dispatch({ type: INCREASE }),
    counterDecrease: () => dispatch({ type: DECREASE }),
    counterReset: () => dispatch({ type: RESET }),
  };
};
const ReadyCounter = connect(mapStateToProps, mapActionsToProps)(Counter);

export default ReadyCounter;
