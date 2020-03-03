import { IState } from '../store/reducers';
import { addTodo, loadTodos } from '../store/actions';
import { connect } from 'react-redux';
import { ITodoItem, ApiStatus } from '../models/model';
import CounterApp from './CounterApp';


export interface IAppStateProps {
  loadingStatus: ApiStatus;
  todos: ITodoItem[];
}

export interface IAppDispatchProps {
  loadTodos: () => void;
  addTodo: (description: string) => void;
}

export interface IAppOwnState {
  description: string;
}

type AppProps = IAppStateProps & IAppDispatchProps 
function mapStateToDispatch(state: IState): IAppStateProps {
  return {
    todos: state.todos.todos,
    loadingStatus: state.todos.loadingStatus
  }
}

const mapDispatchToProps: IAppDispatchProps = {
  addTodo,
  loadTodos
}

export default connect(mapStateToDispatch, mapDispatchToProps)(CounterApp);