import React from "react";
import { View, Text, StyleSheet} from "react-native";
import ImcForms from "@/components/ImcForms";

export default function home() {
    return(
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <Text style={style.text}>Calculo IMC</Text>
        <ImcForms/>
    </View>
    );
}

const style = StyleSheet.create({
    text: {
        fontSize: 30,
        marginBottom: 20
    }
})