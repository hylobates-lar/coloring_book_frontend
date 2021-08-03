export default (state = [], { type, payload }) => {
  switch (type) {
    case 'SET_IMAGES':
      return payload;
    default:
      return state;
  }
};
  