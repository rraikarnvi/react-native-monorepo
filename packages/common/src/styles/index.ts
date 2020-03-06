import {  StyleSheet } from 'react-native';

const baseStyles = StyleSheet.create({
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

export default baseStyles;