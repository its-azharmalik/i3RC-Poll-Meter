export const userLoginAction = (email, password) => {
  if (email === 'testmail@mail.com' && password === 'testpass') {
    return {
      type: 'LOGIN_SUCCESSFULL',
    };
  } else {
    return {
      type: 'LOGIN_FAILED',
    };
  }
};
