import { INCREMENT_COUNTER } from '../constants/index';
import produce from 'immer';
import * as actions from '../actions';
import { ActionType,getType } from 'typesafe-actions';

type Action = ActionType<typeof actions>;

export interface CounterState {
  loadingStatus: boolean;
  counter: number
}
export const initialCounterState: CounterState = {
  loadingStatus: false,
  counter: 0
}

export default function counterReducer(state: CounterState = initialCounterState, action: Action) {
  switch (action.type) {
    case getType(actions.incrementCounter):
      return Object.assign({},state, { loadingStatus: false,counter:state.counter+1 } );
    case getType(actions.decrementCounter):
        return Object.assign({},state, { loadingStatus: false,counter:state.counter-1 } );
    default:
      return state;
  }
}
