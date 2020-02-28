import React, { useState, useEffect } from 'react';
import { Button, StyleSheet, View, Text } from 'react-native';

export const App = () => {
  //State
  const [count, counter] = useState(1);
  const [title, setTitle] = useState('useEffect() in Hooks');
  //useEffect
  useEffect(() => {
    console.log('useEffect has been called!');
  },[]);
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text>Title: {title}</Text>
        <Text>Name: {count}</Text>
        <Button title="increment" onPress={()=>{
          counter(count+1);
        }}></Button>
      </View>
    </View>
  );
};


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
