import { combineReducers } from 'redux';
import counterReducer, { CounterState } from './todosReducer';

export type RootState = {
  counter: CounterState;
};

const reducers = combineReducers({
  counter: counterReducer,
});

export default reducers;