import { combineReducers, Reducer } from 'redux';
import counterReducer, { CounterState } from './counterReducer';
import splashScreenReducer, { SplashState } from './splashScreenReducer';

export type RootState = {
  counter: CounterState;
  splash: SplashState
};

const reducers:Reducer = combineReducers({
  counter: counterReducer,
  splash: splashScreenReducer,
});

export default reducers;