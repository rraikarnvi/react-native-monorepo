// import { RootState } from '../store/reducers';
// import { incrementCounter } from '../store/actions';
// import { connect } from 'react-redux';
// import CounterApp from './CounterApp';


// export interface IAppStateProps {
//   loadingStatus: true;
//   counter: 0;
// }

// export interface IAppDispatchProps {
//   loadTodos: () => void;
//   addTodo: (description: string) => void;
// }

// export interface IAppOwnState {
//   description: string;
// }

// type AppProps = IAppStateProps & IAppDispatchProps 
// function mapStateToDispatch(state: IState): IAppStateProps {
//   return {
//     todos: state.todos.todos,
//     loadingStatus: state.todos.loadingStatus
//   }
// }

// const mapDispatchToProps: IAppDispatchProps = {
//   addTodo,
//   loadTodos
// }

// export default connect(mapStateToDispatch, mapDispatchToProps)(CounterApp);

import { Dispatch } from "redux";
import { connect } from "react-redux";

import { ActionsType, RootStateType } from "../store";
import CounterApp from './CounterApp';


interface OwnProps {
}

const mapStateToProps = (state: RootStateType) => ({
  counter: state.counter.counter,
});

const mapDispatchToProps = (dispatch: Dispatch<ActionsType>, props: OwnProps) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(CounterApp);
