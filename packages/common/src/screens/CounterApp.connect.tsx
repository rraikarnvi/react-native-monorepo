import { RootStateType, ActionsType } from "../store/epics";
import { Dispatch } from "react";
import  constants from "../store/constants";
import { connect } from "react-redux";
import { CounterApp } from "./CounterApp";

const mapStateToProps = (state: RootStateType) => {
    return {
        countState: state.counter,
    }
}

const mapDispatchToProps = (dispatch: Dispatch<ActionsType>) => {
    return {
        onIncreaseClick: () => {
            dispatch({ type: constants.INCREMENT_COUNTER });
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterApp);
