import React from 'react';
import Header from '../Header/index';
import Login from '../Login/index';
import SignUp from '../SignUp/index';
import DBTable from '../DBTablePage/index';
import './style.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <div className="elevator-service_wrapper">
          <Route path={`/`} exact={true} render={props => (
            <Login />
          )} />
          <Route path={`/signup`} exact={true} render={props => (
            <SignUp />
          )} />
          <Route path={`/table`} exact={false} render={props => (
            <DBTable />
          )} />
        </div>
      </div>
    </Router>
  );
}

export default App;
