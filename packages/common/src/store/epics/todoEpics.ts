import axios from "axios";
import { combineEpics, Epic } from "redux-observable";
import { from } from "rxjs";
import { filter, map, switchMap } from "rxjs/operators";
import { ActionType, isOfType } from "typesafe-actions";
import * as actions from "../actions";
import { incrementCounter } from "../actions";
import { INCREMENT_COUNTER } from "../constants";
import { RootState } from "../reducers";

type Action = ActionType<typeof actions>;

const loadTodosEpic: Epic<Action, Action, RootState> = (action$, state$) =>
  action$.pipe(
    filter(isOfType(INCREMENT_COUNTER)),

    switchMap(action => {
      console.log(action.payload.count)
      return from(axios.get("http://localhost:5000/todos")).pipe(
        map(response => incrementCounter(response.data.data)),
      )
    }
    )
  );
  

// const addTodoEpic: Epic<TodosAction, TodosAction, IState> = (
//   action$,
//   state$
// ) => action$.pipe(
//   filter(isOfType(TodosActionTypes.ADD_TODO)),
//   mergeMap(action =>
//     from(axios.post("http://localhost:5000/todos", action.payload)).pipe(
//       map(response => addedTodo(response.data.data)),
//       startWith(addingTodo()),
//       catchError(() => of(addingTodoFailed()))
//     )
//   )
// )

export default combineEpics(loadTodosEpic);
