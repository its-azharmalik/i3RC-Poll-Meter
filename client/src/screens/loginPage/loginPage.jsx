import React, { useCallback, useRef, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import './loginPage.css';
import { userLoginAction } from '../../actions/userActions'

function LoginPage({location, history}) {

  // state
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { loading, error, userInfo } = userLogin

  // const redirect = location.search ? location.search.split('=')[1] : '/'

  useEffect(() => {
    if (userInfo) {
      // history.push(redirect)
    }
  }, [history, userInfo])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(userLoginAction(email, password))
  }


  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const onLogin = useCallback(() => {
    console.log(emailRef.current.value);
    console.log(passwordRef.current.value);
  });
  return (
    <div className="login-page">
      <form className="login-form-container" onSubmit={submitHandler}>
        <div className="logo">I3RC Poll</div>
        <div className="input-field">
          <label htmlFor="">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            ref={emailRef}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-field">
          <label htmlFor="">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            ref={passwordRef}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
