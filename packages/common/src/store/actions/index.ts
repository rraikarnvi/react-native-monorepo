import { createAction } from "typesafe-actions";
import { INCREMENT_COUNTER,DECREMENT_COUNTER } from './../constants/index';

export const incrementCounter = createAction(INCREMENT_COUNTER, (count: number) => ({ count, }))();
export const decrementCounter = createAction(DECREMENT_COUNTER, (count: number) => ({ count, }))();
