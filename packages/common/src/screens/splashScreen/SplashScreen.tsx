import React, { useEffect, useState } from 'react';
import { Button, Text, View, StatusBar } from 'react-native';
import { Observable, Subscription } from 'rxjs';
import styles from './splashStyles'
import { RouteComponentProps } from 'react-router-dom';
import { store } from '../../store';
import constants from '../../store/constants';
import { SplashState } from '../../store/reducers/splashScreenReducer';


export interface SplashProps extends RouteComponentProps {
    splashState: SplashState
}


export const SplashScreen = ({ splashState, history }: SplashProps) => {

    console.log("loading");

    console.log(splashState);

    useEffect(() => {
        console.log("using effect");

        store.dispatch({ type: constants.SPLASH_TIMEOUT });
    }, [])
    if (!splashState.loadingStatus) {
        history.push('/counter')
    }


    return (
        <View style={styles.container}>
            <StatusBar
                barStyle="light-content"
                backgroundColor="#4F6D7A"
            />
            <View style={styles.wrapper}>
                <Text>Hello</Text>
            </View>
        </View>
    );
};
