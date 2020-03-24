import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Login from './components/Login';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Route path='/' component={Header} />
    <Switch>
    <PrivateRoute exact path='/' component={Home} />
    {/** route to Login page */}
    <Route path='login' component={Login} />
    <PrivateRoute path='/add' component={AddFriend} />
    <PrivateRoute path=  '/friends' component={FriendList} />
    </Switch>
    </header>
    </div>
  );
}

export default App;
