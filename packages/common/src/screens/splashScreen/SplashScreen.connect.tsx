import { RootStateType, ActionsType } from "../../store/epics";
import { Dispatch } from "react";
import  constants from "../../store/constants";
import { connect } from "react-redux";
import { SplashScreen } from "./SplashScreen";

const mapStateToProps = (state: RootStateType) => {
    return {
        splashState: state.splash,
    }
}

const mapDispatchToProps = (dispatch: Dispatch<ActionsType>) => {
    return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(SplashScreen);
