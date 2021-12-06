import LoginPage from './screens/loginPage/loginPage';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Dashboard1 from './screens/dashboards/dashboard1';

function App() {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  return (
    <Router>
      <div className="App">
        <Route exact path="/">
          {userInfo?.authType === 'Data Collector' ? (
            <Redirect to="/home" />
          ) : (
            <LoginPage />
          )}
        </Route>
        <Route exact path="/home">
          {userInfo ? <Dashboard1 /> : <Redirect to="/" />}
        </Route>
      </div>
    </Router>
  );
}

export default App;
