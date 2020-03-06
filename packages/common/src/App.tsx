import React from 'react';
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import { Route, Router, Switch } from './router/index';
import CounterApp from './screens/CounterApp.connect';
import SplashScreen from './screens/splashScreen/SplashScreen.connect';
import { persistor, store } from './store';
import { COUNTER_SCREEN, SPLASH_SCREEN } from './util/constants';

export default function App() {
  return (
    <Provider store={store}>
      {/* for loading */}
      {/* <PersistGate loading={<LoadingView />} persistor={persistor}> */}
      <PersistGate persistor={persistor}>
        <Router>
          <Switch>
            <Route exact path={COUNTER_SCREEN} component={CounterApp} />
            <Route exact path={SPLASH_SCREEN} component={SplashScreen} />
          </Switch>
        </Router>
      </PersistGate>
    </Provider>
  );
};

