import React, { useCallback, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './loginPage.css';
import { userLoginAction } from '../../actions/userActions';

function LoginPage() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [loginError, setLoginError] = useState();

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, userInfo, error } = userLogin;
  console.log(loading);

  const submitHandler = useCallback(
    async (e) => {
      const email = emailRef.current.value;
      const password = passwordRef.current.value;
      e.preventDefault();
      dispatch(userLoginAction(email, password));
    },
    [emailRef, passwordRef]
  );

  return (
    <div className="login-page">
      <form className="form" onSubmit={submitHandler}>
        <div className="logo">I3RC Poll</div>
        <div className="input-field">
          <label htmlFor="">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            ref={emailRef}
            required
          />
        </div>
        <div className="input-field">
          <label htmlFor="">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            ref={passwordRef}
            required
          />
        </div>
        <button className="login-button" type="submit">
          Login
        </button>
        <div className="login-error">{loginError}</div>
      </form>
    </div>
  );
}

export default LoginPage;
