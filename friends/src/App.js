import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Login from './components/Login';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Friends App</h1>
      </header>

    {/** route to Login page */}
    <Route path='login' component={Login} />



    </div>
  );
}

export default App;
