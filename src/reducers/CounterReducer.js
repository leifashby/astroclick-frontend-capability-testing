const InitState = 1;
const MaxState = 99;
const MinState = 0;

export default (state = InitState, action) => {
  switch (action.type){
    case 'INCREASE_COUNTER':
      if (state === MaxState) {
        return state;
      }
      return ++state;
    case 'DECREASE_COUNTER':
      if (state === MinState) {
        return state;
      }
      return --state;
    case 'RESET_COUNTER':
      return InitState;
    default:
      return state;
  }
};
