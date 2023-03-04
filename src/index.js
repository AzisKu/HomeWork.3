import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {rootReducers} from "./redux/reducer/reducer";
import {Provider} from "react-redux";
import {createStore} from "redux";
import {applyMiddleware} from "redux";
import {logger} from "redux-logger/src";
import thunk from "redux-thunk";


const store = createStore(rootReducers, applyMiddleware(logger,thunk))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// import { combineReducers } from "redux";
// import { formReducer } from "./form-reducer";
//
// export const reducer = combineReducers({
//     form: formReducer
// })


