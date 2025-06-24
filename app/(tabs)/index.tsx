import React from "react";
import { StyleSheet, Text, View } from "react-native";


export default function Home() {
    return(
        <View style={style.ViewBase}>
            <Text>Home</Text>
        </View>
    );
}

const style = StyleSheet.create({
    ViewBase: {
        width: '100%',
        height: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});