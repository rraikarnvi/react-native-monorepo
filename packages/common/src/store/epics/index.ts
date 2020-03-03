import { combineEpics, createEpicMiddleware } from 'redux-observable';
import todoEpics from './todoEpics';
import { RootState } from '../reducers';
import { isOfType,ActionType } from "typesafe-actions";

import * as actions from "../actions";

type Action = ActionType<typeof actions>;

export const rootEpic = combineEpics(todoEpics);

export default createEpicMiddleware<Action, Action, RootState>();