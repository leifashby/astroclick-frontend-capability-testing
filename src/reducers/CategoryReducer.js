const InitState = ["Category One", "Category Two", "Category Three"];

export default (state = InitState, action) => {
  switch (action.type){
    case 'ADD_CATEGORY':
      return [
        ...state,
        action.text
      ];
    case 'REMOVE_CATEGORY':
      return state.filter((text, index) => {
        return index !== action.index;
      });
    default:
      return state;
  }
};
