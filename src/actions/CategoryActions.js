module.exports = {
  categoryAdd: (string) => {
    return {
      type: 'ADD_CATEGORY',
      text: string
    };
  },
  categoryRemove: (index) => {
    return {
      type: 'REMOVE_CATEGORY',
      index: index
    };
  }
};
