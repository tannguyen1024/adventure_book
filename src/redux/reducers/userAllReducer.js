const userAllReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_USER_ALL':
      return action.payload;
    default:
      return state;
  }
};

// user will be on the redux state at:
// state.user
export default userAllReducer;
