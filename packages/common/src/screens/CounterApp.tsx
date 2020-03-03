import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const CounterApp = () => {
    //State
    const [count, counter] = useState(1);
    const [title, setTitle] = useState('useEffect() in ');
    //useEffect
    useEffect(() => {
        console.log('useEffect has been called!');
    }, []);
    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <Text>Title: {title}</Text>
                <Text>Name: {count}</Text>
                <Button title="increment" onPress={() => {
                    counter(count + 1);
                }}></Button>
            </View>
        </View>
    );
};

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
