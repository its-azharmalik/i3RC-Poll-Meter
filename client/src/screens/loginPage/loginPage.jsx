import React, { useCallback, useRef } from 'react';
import './loginPage.css';
import { useSelector, useDispatch } from 'react-redux';
import { userLoginAction } from '../../actions/userActions';

function LoginPage() {
  const dispatch = useDispatch();
  const userLoggedin = useSelector((state) => state.userLogin);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const onLogin = useCallback(() => {
    dispatch(
      userLoginAction(emailRef.current.value, passwordRef.current.value)
    );
    if (userLoggedin) {
      console.log('loggedin');
    } else {
      console.log('ilee');
    }
  });
  return (
    <div className="login-page">
      <form className="login-form-container">
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
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            onLogin();
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
