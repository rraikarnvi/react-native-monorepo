import { INCREMENT_COUNTER } from './../constants/index';
import { createAction } from "typesafe-actions";

export const incrementCounter = createAction(INCREMENT_COUNTER, (count: number) => ({
  count,
}))();
