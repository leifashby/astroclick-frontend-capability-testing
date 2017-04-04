export default (state = [], action) => {
  switch (action.type){
    case 'FETCH_QUAKE_DATA':
      return [];
    case 'RECEIVE_QUAKE_DATA':
      return action.features
    default:
      return state;
  }
};
