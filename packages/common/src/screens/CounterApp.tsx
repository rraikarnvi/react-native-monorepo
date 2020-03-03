import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { incrementCounter } from '../store/actions';
import { dispatch } from 'rxjs/internal/observable/pairs';
import store from '../store'
import { INCREMENT_COUNTER } from '../store/constants';
import { count } from 'rxjs/operators';

// const dispatchProps = {
//     increments:incrementCounter
// };
// type Props = typeof dispatchProps & {
//     countvalue: number;
// };

const CounterApp = () => {
    const { counter } = store.getState();
    //State
    // const [count, counter] = useState(1);
    // const [title, setTitle] = useState('useEffect() in ');
    //useEffect
    // useEffect(() => {
    //     console.log('useEffect has been called!');
    // }, []);


    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <Text>Name: {count}</Text>
                <Button title="increment" onPress={() => {
                     store.dispatch({
                         type:INCREMENT_COUNTER,
                         payload:{
                             count:counter
                         }
                     });
                }}></Button>
            </View>
        </View>
    );
};

store.subscribe(CounterApp);
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
