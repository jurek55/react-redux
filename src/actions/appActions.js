export const INCREASE = 'INCREASE';
export const DECREASE = 'DECREASE';
export const RESET = 'RESET';

export const counterIncrease = () => ({
  type: INCREASE,
});

export const counterDecrease = () => ({
  type: DECREASE,
});

export const counterReset = () => ({
  type: RESET,
});
