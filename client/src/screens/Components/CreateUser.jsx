import React, { useCallback, useRef } from 'react';
import { logout, register } from '../../actions/userActions';
import { useDispatch } from 'react-redux';
import '../loginPage/loginPage.css';
import { userRegisterReducer } from '../../reducers/userReducers';

const CreateUser = () => {
  // refs
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const authTypeRef = useRef();

  const dispatch = useDispatch();

  // onsubmit
  const submitHandler = useCallback((e) => {
    e.preventDefault(); // dhyan rakhein iska
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const authType = authTypeRef.current.value;
    dispatch(register(name, email, password, authType));
  }, []);

  return (
    <div>
      <form className="login-form-container" onSubmit={submitHandler}>
        <div className="logo">I3RC Poll USER REGISTER</div>
        <div className="input-field">
          <label htmlFor="">Name</label>
          <input
            type="text"
            placeholder="Enter your Name"
            ref={nameRef}
            required
          />
        </div>
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
        <div className="input-field">
          <label htmlFor="">Email</label>
          <label htmlFor="authType">Choose User Status:</label>
          <select ref={authTypeRef} name="authType">
            <option value="Data Collector">Data Collector</option>
            <option value="Poll Admin Client">Poll Admin Client</option>
            <option value="BLO">Booth Level Officer</option>
            <option value="System Admin">System Admin</option>
          </select>
        </div>
        <button type="submit">Create User</button>
      </form>
    </div>
  );
};

export default CreateUser;
