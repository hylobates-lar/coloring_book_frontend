export default (state = {}, { type, payload }) => {
    switch (type) {
      case 'SET_USER':
        console.log(payload)
        localStorage.token = payload.token;
        return payload;
      case 'CLEAR_USER':
        localStorage.clear("token")
        return {};
      default:
        return state;
    }
  };

// {
// user: {},
// token: ""
// }