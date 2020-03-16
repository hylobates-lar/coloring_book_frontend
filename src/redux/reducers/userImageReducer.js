export default (state = [], { type, payload }) => {
    switch (type) {
      case 'ADD_USER_IMAGE':
        return [...state, payload];
      default:
        return state;
    }
  };
  