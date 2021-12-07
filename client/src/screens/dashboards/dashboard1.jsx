import React, { useCallback, useEffect, useState } from 'react';
import { logout } from '../../actions/userActions';
import { useDispatch, useSelector } from 'react-redux';
import './dashboard.css';
import CreateUser from '../Components/CreateUser';
import { listUsers } from '../../actions/userActions';
import UserList from '../Components/userList';

const Dashboard1 = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const allUser = useSelector((state) => state.userList);
  const { users, loading, error } = allUser;
  const { userInfo } = userLogin;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listUsers());
  }, []);

  const [addUserFlag, setAddUserFlag] = useState(false);
  function addUserHandler() {
    setAddUserFlag(true);
  }
  const cancelHandeler = useCallback(() => {
    setAddUserFlag(false);
  });

  return (
    <div className="dashboard-container">
      <div className="header-container">
        <div className="header">
          <h1 className="heading">Welcome {userInfo?.name}</h1>
          {userInfo && <h2>You are a {userInfo.authType}</h2>}
        </div>
        <div>
          <button
            className="add-user"
            onClick={() => {
              addUserHandler();
            }}
          >
            Add User
          </button>
          <button
            className="logout-button"
            onClick={() => {
              dispatch(logout());
            }}
          >
            Logout
          </button>
        </div>
      </div>
      {loading ? (
        <h1>Loading</h1>
      ) : error ? (
        <h1>{error}</h1>
      ) : (
        <UserList users={users} />
      )}
      {addUserFlag && <CreateUser cancelHandeler={cancelHandeler} />}
    </div>
  );
};

export default Dashboard1;
