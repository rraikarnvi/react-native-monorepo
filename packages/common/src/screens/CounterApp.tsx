import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { Observable, Subscription } from 'rxjs';
import { store } from '../store';
import { DECREMENT_COUNTER, INCREMENT_COUNTER } from '../store/constants';
import { RootState } from '../store/reducers';

const CounterApp = () => {

    const state$ = getState$(store);
    const [state, counter] = useState(store.getState().counter)
    let subscription: Subscription;

    useEffect(() => {
        console.log('componentDidMount!');
        subscription = state$.subscribe(function (state: RootState) {
            counter(state.counter);
        });
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
                <Button title="increment" onPress={() => {
                    store.dispatch({ type: INCREMENT_COUNTER });
                }}></Button>
                {state.counter > 2 ? <Text>Name: {state.counter}</Text> : <Text>Cool: {state.counter}</Text>}
                <Text>{}</Text>
                <Button title="decrement" onPress={() => {
                    store.dispatch({ type: DECREMENT_COUNTER, payload: { count: 0 } });
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