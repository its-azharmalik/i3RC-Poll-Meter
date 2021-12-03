import React, { useCallback, useRef } from 'react';
import './loginPage.css';

function LoginPage() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const onLogin = useCallback(() => {
    console.log(emailRef.current.value);
    console.log(passwordRef.current.value);
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
        <button type="submit" onClick={onLogin}>
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
