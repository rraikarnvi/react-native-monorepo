import React from 'react';
import CounterApp from './screens/CounterApp';
import {createStore} from 'redux'
import { Provider } from "react-redux";

export const App = () => {

  const reducer = ()=>{

  } 
  const store  = createStore(reducer);
  return (
    <Provider store={store}>
    <CounterApp ></CounterApp>
    </Provider>
  );
};


