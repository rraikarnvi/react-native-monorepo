import React from 'react';
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import { Route, Router, Switch } from './router/index';
import CounterApp from './screens/CounterApp.connect';
import SplashScreen from './screens/splashScreen/SplashScreen.connect';
import { persistor, store } from './store';
import PATH from './util/constants';
import { LoginScreen } from './screens/auth/login/loginScreen';

export default function App() {
  return (
    <Provider store={store}>
      {/* for loading */}
      {/* <PersistGate loading={<LoadingView />} persistor={persistor}> */}
      <PersistGate persistor={persistor}>
        <Router>
          <Switch>
            <Route exact path={PATH.COUNTER_SCREEN} component={CounterApp} />
            <Route exact path={PATH.SPLASH_SCREEN} component={SplashScreen} />
            <Route exact path={PATH.LOGIN_SCREEN} component={LoginScreen} />
          </Switch>
        </Router>
      </PersistGate>
    </Provider>
  );
};

