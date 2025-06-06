import { useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import { Button, Text, View } from "react-native";


export default function Resultado (){
    const {a,b} = useLocalSearchParams()


    function Res() {
        setRes(num1*num2); 
    }

    return(
        <View>
            <Text>{res}</Text>
        </View>
    );
    
}
