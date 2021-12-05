import React from 'react';
import { logout } from '../../actions/userActions';
import { useDispatch } from 'react-redux';

const Dashboard1 = () => {
  const dispatch = useDispatch();
  return (
    <div>
      This is just dashboard after Screen
      <button
        onClick={() => {
          dispatch(logout());
        }}
      >
        logout
      </button>
    </div>
  );
};

export default Dashboard1;
