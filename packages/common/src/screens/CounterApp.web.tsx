import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useMediaQuery } from 'react-responsive';

const CounterApp = () => {
    //State
    const [count, counter] = useState(1);
    const [title, setTitle] = useState('useEffect() in Hooks');
    //useEffect
    useEffect(() => {
        console.log('useEffect has been called!');
    }, []);

    const isDesktopOrLaptop = useMediaQuery({
        query: "(min-device-width: 1224px)"
    });
    const isBigScreen = useMediaQuery({ query: "(min-device-width: 1824px)" });
    const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
    const isTabletOrMobileDevice = useMediaQuery({
        query: "(max-device-width: 1224px)"
    });
    const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
    const isRetina = useMediaQuery({ query: "(min-resolution: 2dppx)" });
    return (
        // <View style={styles.container}>
        //   <View style={styles.wrapper}>
        //     <Text>Title: {title}</Text>
        //     <Text>Name: {count}</Text>
        //     <Button title="increment" onPress={()=>{
        //       counter(count+1);
        //     }}></Button>
        //   </View>
        // </View>

        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            {isDesktopOrLaptop && (
                <>
                    <Text>You are a desktop or laptop</Text>
                    {isBigScreen && <Text>You also have a huge screen</Text>}
                    {isTabletOrMobile && <Text>You are sized like a tablet or mobile phone though</Text>}
                </>
            )}
            {isTabletOrMobileDevice && <Text>You are a tablet or mobile phone</Text>}
            <Text>
                Your are in {isPortrait ? "portrait" : "landscape"} orientation
    </Text>
            {isRetina && <Text>You are retina</Text>}

            <Button title="add" onPress={()=>{onClick}}></Button>
        </View>
    );
};

const onClick=()=>{
    
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
