import React from 'react';
import CounterApp from './screens/CounterApp';
import { Provider } from "react-redux";
import store from './store'

export default function App() {
  return (
    <Provider store={store}>
    <CounterApp counter={0}></CounterApp>
    </Provider>
  );
};

