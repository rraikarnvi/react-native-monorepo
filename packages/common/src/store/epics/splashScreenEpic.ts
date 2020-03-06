import axios from "axios";
import { Epic } from "redux-observable";
import { from, Observable } from "rxjs";
import { filter, map, switchMap, delay, mapTo } from "rxjs/operators";
import { ActionType, isActionOf } from "typesafe-actions";
import * as actions from "../actions";
import { splashTimeout } from "../actions";
import { RootState } from "../reducers";
import { boolean } from "yup";
import { store } from "..";
import constants from "../constants";

type Action = ActionType<typeof actions>;
const splashAction = () => ({ type: constants.SPLASH_TIMEOUT });

const splashScreenEpic: Epic<Action, Action, RootState> = (action$, state$) =>
    //   action$.pipe(
    //     filter(isActionOf(actions.splashTimeout)),
    //     delay(2000),
    //     switchMap(action => {
    //         console.log("after 2000");
    //         store.getState().splash.loadingStatus=false;
    //         console.log(store.getState());

    //       return from(Observable.create()).pipe(
    //         map(response => {
    //             console.log("response");
    //             return actions.splashTimeout(false);

    //         }),
    //       )
    //     }
    //     )
    //   );
    action$.pipe(
        filter(isActionOf(actions.splashTimeout)),
        delay(1000), // Asynchronously wait 1000ms then continue
        mapTo(actions.splashSetAction(false))
    );


export default splashScreenEpic;
