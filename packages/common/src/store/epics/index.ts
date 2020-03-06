import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { ActionType } from "typesafe-actions";
import * as actions from "../actions";
import { RootState } from '../reducers';
import counterEpic from './counterEpics';

export type RootStateType = RootState;

export type ActionsType = ActionType<typeof actions>;

export const rootEpic = combineEpics(counterEpic);

export default createEpicMiddleware<
    ActionsType,
    ActionsType,
    RootStateType>();