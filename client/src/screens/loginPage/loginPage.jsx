import React, {
  useCallback,
  useRef,
  useState,
  useEffect,
  history,
} from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './loginPage.css';
import { userLoginAction } from '../../actions/userActions';

function LoginPage() {
  // state
  // const [email, setEmail] = useState('')
  // const [password, setPassword] = useState('')
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  // const redirect = location.search ? location.search.split('=')[1] : '/'
  const history = useHistory();

  useEffect(() => {
    if (userInfo && userInfo.user == 'Data Collector') {
      // history.push('/blank');
    }
  }, [userInfo]);

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
      <form className="login-form-container" onSubmit={submitHandler}>
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
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;