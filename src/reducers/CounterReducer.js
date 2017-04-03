const InitState = 1;

export default (state = InitState, action) => {
  switch (action.type){
    case 'INCREASE_COUNTER':
      return ++state;
    case 'DECREASE_COUNTER':
      return --state;
    default:
      return state;
  }
};
