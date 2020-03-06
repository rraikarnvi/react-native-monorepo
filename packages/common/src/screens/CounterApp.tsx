import React, { useEffect, useState, Dispatch } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { Observable, Subscription } from 'rxjs';
import { store } from '../store';
import constants from '../store/constants';
import { RootState } from '../store/reducers';
import { CounterState } from '../store/reducers/counterReducer';
import { ActionsType, RootStateType } from '../store/epics';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import PATH from '../util/constants';


export interface CounterProps extends RouteComponentProps {
    countState: CounterState;
}

export const CounterApp = ({ countState, history }: CounterProps) => {

    console.log("state");

    console.log(countState.loadingStatus);

    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <Button title="increment" onPress={() => {
                    store.dispatch({ type: constants.INCREMENT_COUNTER });
                }}></Button>
                {countState.counter > 2 ? <Text>Name: {countState.counter}</Text> : <Text>Cool: {countState.counter}</Text>}
                <Text>{}</Text>
                <Button title="decrement" onPress={() => {
                    store.dispatch({ type: constants.DECREMENT_COUNTER, payload: { count: 0 } });
                }}></Button>

                <Button title="login" onPress={() => {
                    history.push(PATH.LOGIN_SCREEN)
                }}></Button>
            </View>
        </View>
    );
};

const getState$ = (store: any) => {
    return new Observable<RootState>(function (observer) {
        // emit the current state as first value:
        observer.next(store.getState());
        const unsubscribe = store.subscribe(function () {
            // emit on every new state changes
            observer.next(store.getState());
        });
        // let's return the function that will be called
        // when the Observable is unsubscribed
        return unsubscribe;
    });
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        height: "100%"
    },
    wrapper: {
        flex: 1,
        backgroundColor: "#F5FCFF",
        width: "100%",
        maxWidth: 425
    }
});