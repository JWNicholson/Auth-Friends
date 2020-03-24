import React from 'react';
import ReactDOM from 'react-dom';
import  { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import friendReducer from './reducers/friendReducer';
import App from './App';
import './index.css';


const store = createStore(friendReducer, applyMiddleware(thunk));

ReactDOM.render(
<Router>
  <Provider store={store}>
    <App />
    </Provider>
</Router>, 
document.getElementById('root'));
