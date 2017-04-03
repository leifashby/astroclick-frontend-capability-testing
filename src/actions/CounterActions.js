module.exports = {
  counterDown: (string) => {
    return {
      type: 'DECREASE_COUNTER'
    };
  },
  counterUp: (index) => {
    return {
      type: 'INCREASE_COUNTER'
    };
  },
};
