import {  StyleSheet } from 'react-native';
import baseStyles from '../../../styles';
const styles = StyleSheet.create({
    container: baseStyles.container,
    wrapper:{
        ...baseStyles.wrapper,
        backgroundColor: '#ff0004',
        alignItems:"center",
        alignContent:"center"
    }
});

export default styles;