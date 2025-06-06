import React, { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
import { useRouter } from "expo-router";

export default function exercicio() {
    const [num1,setNum1] = useState("");
    const [num2,setNum2] = useState("");
    const [res,setRes] = useState(0);
    const router = useRouter();
    
    return(
        <View>
            <Text>Multiplicação</Text>
            <TextInput placeholder="Digite aqui" onChangeText={setNum1}/>
            <TextInput placeholder="Digite aqui" onChangeText={setNum2}/>

            <Button
                title="Calcular"
                onPress={() => router.push(`/exercicio/${num1}/${num2}/`)}
            />

        </View>
    );
}