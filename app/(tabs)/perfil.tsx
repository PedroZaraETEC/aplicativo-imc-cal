import React from "react";
import { View, Text } from "react-native";
import FotoPerfil from "@/components/FotoPerfil";

export default function Perfil() {
    return(
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <Text>Perfil</Text>
        <FotoPerfil/>
        </View>
    )
}