import CalculoImc from "@/components/CalculoImc";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Home() {   
    return(
        <View style={style.body}>
            <Text style={style.h1}>Calcule seu IMC!!</Text>
            <View>
                <CalculoImc/>
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    body: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },

    h1: {
        fontSize: 50,
        fontWeight: 900,
        marginBottom: 50
    }
});
