import { createAction } from "typesafe-actions";
import  constants from './../constants/index';

// export const incrementCounter = createAction(INCREMENT_COUNTER, (count: number) => ({ count, }))();
export const decrementCounter = createAction(constants.DECREMENT_COUNTER, (count: number) => ({ count, }))();
export const incrementCounter =  createAction(constants.INCREMENT_COUNTER)();
export const splashTimeout =  createAction(constants.SPLASH_TIMEOUT)();
export const splashSetAction =  createAction(constants.SPLASH_SET_ACTION, (loadingStatus: boolean) => ({ loadingStatus, }))();

// const incrementIfOdd = () => ({ type: INCREMENT_IF_ODD });
