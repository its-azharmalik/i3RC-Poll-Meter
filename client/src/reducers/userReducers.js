export const userLoginReducer = (state = false, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESSFULL':
      return !state;
    case 'LOGIN_FAILED':
      return state;
    default:
      return state;
  }
};
