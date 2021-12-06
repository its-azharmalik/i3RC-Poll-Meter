import React from 'react';
import { logout } from '../../actions/userActions';
import { useDispatch, useSelector } from 'react-redux';
import CreateUser from '../Components/CreateUser';

const Dashboard1 = () => {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  return (
    <>
      <h1>Welcome {userInfo?.name}</h1>
      {userInfo && <h2>You are a {userInfo.authType}</h2>}
      This is just dashboard after Screen
      <button
        onClick={() => {
          dispatch(logout());
        }}
      >
        logout
      </button>
      <CreateUser />
    </>
  );
};

export default Dashboard1;
