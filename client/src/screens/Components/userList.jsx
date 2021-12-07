import React, { useEffect, useState } from 'react';
import './userList.css';

function UserList({ users }) {
  const [userList, setUserList] = useState(users);
  useEffect(() => {
    setUserList(users);
  }, [userList]);
  return (
    <div className="table-container">
      <table>
        <caption>User List</caption>
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Auth Type</th>
          </tr>
        </thead>
        <tbody>
          {userList.map((user) => (
            <tr>
              <td scope="row">{user.name}</td>
              <td>{user.email}</td>
              <td>{user.authType}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserList;
