import React, { useCallback, useEffect, useState } from 'react';
import { logout } from '../../actions/userActions';
import { useDispatch, useSelector } from 'react-redux';
import './dashboard.css';
import CreateUser from '../Components/CreateUser';
import { listUsers } from '../../actions/userActions';

const Dashboard1 = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listUsers());
  }, [])
  const userLogin = useSelector((state) => state.userLogin);
  const allUser = useSelector((state) => state.userList);
  const { userInfo } = userLogin;
  console.log(allUser);

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
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas, fuga nobis
      exercitationem hic similique magni consequuntur vitae laudantium eos
      itaque dignissimos at perspiciatis nesciunt, enim quidem illum accusamus?
      Quam pariatur ratione, earum libero, vel provident voluptatem et sapiente
      molestiae aliquam officiis a ad architecto doloribus ex deserunt mollitia
      velit eum harum temporibus? Dolorum pariatur mollitia, unde laboriosam
      officiis temporibus modi esse omnis deserunt error cum excepturi odio
      voluptas quam quaerat hic, reiciendis iste voluptatem iure commodi!
      Voluptatibus nam asperiores praesentium eligendi, eveniet quidem alias?
      Quos sint voluptatum facere ut suscipit beatae nostrum dolorem saepe esse.
      Officia deserunt reiciendis distinctio ipsa excepturi, hic totam sapiente
      aspernatur, ducimus labore beatae perspiciatis a quibusdam odio. Et
      nostrum vel odio obcaecati doloribus non, officia libero iusto cumque,
      labore sit numquam tenetur a. Officia quasi ducimus laborum distinctio ut
      inventore expedita, dolorem a illo culpa eveniet id sunt. Nesciunt illo
      vitae et quam optio repellat nobis repudiandae fugit dolorem rem expedita
      reprehenderit, recusandae, tenetur doloribus similique suscipit
      dignissimos voluptates necessitatibus fuga modi esse quis? Suscipit
      eveniet quibusdam hic ex, ipsa natus fugit dolores incidunt iste, ea modi,
      atque tempore accusantium provident alias. Excepturi, reiciendis. Optio
      autem incidunt natus maiores iste aliquid reiciendis minima odit. Amet?
      {addUserFlag && <CreateUser cancelHandeler={cancelHandeler} />}
    </div>
  );
};

export default Dashboard1;
