import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux'
import { reducer } from './redux-store/store'
import { Provider } from 'react-redux'

const initialState = {
  percent:0,
  fileUploadedStatus: true,
  url : 'http://localhost:5000/',
  
}
const store = createStore(reducer, initialState)
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
