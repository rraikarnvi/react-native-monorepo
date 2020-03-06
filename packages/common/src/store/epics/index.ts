import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { ActionType } from "typesafe-actions";
import * as actions from "../actions";
import { RootState } from '../reducers';
import counterEpic from './counterEpics';
import splashScreenEpic from './splashScreenEpic';

export type RootStateType = RootState;

export type ActionsType = ActionType<typeof actions>;

export const rootEpic = combineEpics(counterEpic,splashScreenEpic);

export default createEpicMiddleware<
    ActionsType,
    ActionsType,
    RootStateType>();