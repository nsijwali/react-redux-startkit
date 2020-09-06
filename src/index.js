import React from 'react';
import thunk from 'redux-thunk';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux'
import rootReducer from './reducers/rootReducer'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let middlewares = [thunk];
const composedEnhancers = compose;
if (process.env.NODE_ENV !== 'production') middlewares = [...middlewares]

const store = createStore(rootReducer, composedEnhancers(applyMiddleware(...middlewares)));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
