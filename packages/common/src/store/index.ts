import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer, { initialCounterState } from './reducers/todosReducer';
import epicMiddleware, { rootEpic } from './epics';
import { ActionType } from "typesafe-actions";

import * as actions from "./actions";
import reducers, { RootState } from "./reducers";

export type RootStateType = RootState;
export type ActionsType = ActionType<typeof actions>;

const composeEnhancer = composeWithDevTools({
  name: 'React Clean Architecture'
});

const store = createStore(
  rootReducer,
  initialCounterState,
  composeEnhancer(applyMiddleware(epicMiddleware))
);

epicMiddleware.run(rootEpic);

export default store;