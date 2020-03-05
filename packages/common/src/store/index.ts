import { applyMiddleware, compose, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { ActionType } from "typesafe-actions";
import * as actions from "./actions";
import epicMiddleware, { rootEpic } from './epics';
import reducers, { RootState } from "./reducers";



export type RootStateType = RootState;
export type ActionsType = ActionType<typeof actions>;

const composeEnhancer = composeWithDevTools({
  name: 'React Clean Architecture'
});

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: Function;
  }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Create store
function configureStore(initialState?: RootStateType) {
  // configure middlewares
  const middlewares = [
    epicMiddleware,
  ];
  // compose enhancers
  const enhancer = composeEnhancers(
    applyMiddleware(...middlewares)
  );
  // create store
  return createStore(
    reducers,
    initialState,
    enhancer
  );
}

const store = configureStore();

epicMiddleware.run(rootEpic);

export { store, actions };
