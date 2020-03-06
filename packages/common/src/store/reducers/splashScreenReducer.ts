import { ActionType, getType } from 'typesafe-actions';
import * as actions from '../actions';

type Action = ActionType<typeof actions>;

export interface SplashState {
    loadingStatus: boolean;
}
export const initialSplashState: SplashState = {
    loadingStatus: true,
}

export default function splashScreenReducer(state: SplashState = initialSplashState, action: Action) {
    console.log(action.type);

    switch (action.type) {
        case getType(actions.splashTimeout):
            console.log("changing value");
            return Object.assign({}, state, { loadingStatus: state.loadingStatus });
        case getType(actions.splashSetAction):
            console.log("changing splashSetAction value");
            return Object.assign({}, state, { loadingStatus: action.payload.loadingStatus });
        default:
            return state;
    }
}
