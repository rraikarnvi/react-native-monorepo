import React, { useEffect, useState, Dispatch } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { Observable } from 'rxjs';
import store from '../store';
import { INCREMENT_COUNTER } from '../store/constants';
import { ActionsType, RootStateType } from "../store";
import { connect } from 'react-redux';
import { CounterState } from '../store/reducers/todosReducer';
import { incrementCounter } from '../store/actions'
import { Store } from 'redux';

const CounterApp=() => {
    console.log("loading");
    const state$ = getState$(store);
    const [count,counter] = useState(store.getState().counter)
    
    
    useEffect(() => {
        console.log('useEffect has been called!');
        const subscription = state$.subscribe(function (state) {
            console.log("counter is")
            counter(state.counter);
    
        });
    },[]);
    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <Text>Name: {count}</Text>
                <Button title="increment" onPress={() => {
                    store.dispatch({
                        type: INCREMENT_COUNTER,
                        payload: {
                            count: 0
                        }
                    });
                }}></Button>
            </View>
        </View>
    );
};

const getState$ = (store:any) => {
    return new Observable<CounterState>(function (observer) {
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

export default CounterApp;

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
