import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { ActionType } from "typesafe-actions";
import * as actions from "../actions";
import { RootState } from '../reducers';
import todoEpics from './todoEpics';

export type RootStateType = RootState;

export type ActionsType = ActionType<typeof actions>;

export const rootEpic = combineEpics(todoEpics);

export default createEpicMiddleware<
    ActionsType,
    ActionsType,
    RootStateType>();