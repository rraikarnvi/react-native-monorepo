import axios from "axios";
import { combineEpics, Epic } from "redux-observable";
import { from, of } from "rxjs";
import { catchError, filter, map, mergeMap, startWith, switchMap } from "rxjs/operators";
import { isOfType } from "typesafe-actions";
import { addedTodo, addingTodo, addingTodoFailed, loadedTodos, loadingTodos, loadingTodosFailed, TodosAction, TodosActionTypes } from "../actions";
import { IState } from "../reducers";

const loadTodosEpic: Epic<TodosAction, TodosAction, IState> = (
  action$,
  state$
) =>
  action$.pipe(
    filter(isOfType(TodosActionTypes.LOAD_TODOS)),
    switchMap(action =>
      from(axios.get("http://localhost:5000/todos")).pipe(
        map(response => loadedTodos(response.data.data)),
        startWith(loadingTodos()),
        catchError(() => of(loadingTodosFailed()))
      )
    )
  );

const addTodoEpic: Epic<TodosAction, TodosAction, IState> = (
  action$,
  state$
) => action$.pipe(
  filter(isOfType(TodosActionTypes.ADD_TODO)),
  mergeMap(action =>
    from(axios.post("http://localhost:5000/todos", action.payload)).pipe(
      map(response => addedTodo(response.data.data)),
      startWith(addingTodo()),
      catchError(() => of(addingTodoFailed()))
    )
  )
)

export default combineEpics(loadTodosEpic, addTodoEpic);
