import React, { useState } from 'react';
import { StatusBar, Text, View } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { RouteComponentProps } from 'react-router-dom';
import styles from './loginStyles';
import Icon from 'react-native-vector-icons/FontAwesome';

export interface LoginProps extends RouteComponentProps {
    // splashState: LoginState
}


export const LoginScreen = ({ history }: LoginProps) => {
    const [value, onChangeText] = useState('Useless Placeholder');
    console.log("loading");


    return (
        <View style={styles.container}>

            <View style={styles.wrapper}>
                <Input
                    placeholder='INPUT WITH ERROR MESSAGE' value={value}
                    onChange={() => { onChangeText }}
                />
                <Input
                    placeholder='INPUT WITH ERROR MESSAGE' value={value}
                    onChange={() => { onChangeText }}
                />
                <Button
                    title="Solid Button"
                />
            </View>
        </View>
    );
};
