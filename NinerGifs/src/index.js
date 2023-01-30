import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './data/App';
//import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer/reducerIndex';
import thunk from 'redux-thunk'

const store = createStore(reducer, applyMiddleware(thunk));


ReactDOM.render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

