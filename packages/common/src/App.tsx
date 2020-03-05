import React from 'react';
import { Provider } from "react-redux";
import { store } from './store'
import CounterApp from './screens/CounterApp';

export default function App() {
  return (
    <Provider store={store}>
      <CounterApp></CounterApp>
    </Provider>
  );
};

