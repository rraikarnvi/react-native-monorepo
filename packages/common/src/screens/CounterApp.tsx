import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { Observable, Subscription } from 'rxjs';
import store from '../store';
import { INCREMENT_COUNTER } from '../store/constants';
import { CounterState } from '../store/reducers/todosReducer';

const CounterApp = () => {
    const state$ = getState$(store);
    const [state, counter] = useState(store.getState())
    let subscription: Subscription;
    useEffect(() => {
        console.log('componentDidMount!');
        subscription = state$.subscribe(counter);
    }, []);

    useEffect(() => {
        return () => {
            console.log('will unmount');
            subscription.unsubscribe();
        }
    }, []);

    useEffect(() => console.log('mounted or updated'));

    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                {state.counter > 2 ? <Text>Name: {state.counter}</Text> : <Text>Cool: {state.counter}</Text>}
                <Button title="increment" onPress={() => {
                    store.dispatch({ type: INCREMENT_COUNTER });
                }}></Button>
            </View>
        </View>
    );
};

const getState$ = (store: any) => {
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