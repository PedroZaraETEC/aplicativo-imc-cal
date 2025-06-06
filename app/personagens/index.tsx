import { useRouter } from "expo-router";
import React from "react";
import { Button, Text, View } from "react-native";

export default function Personagens() {
    const router = useRouter();
    const id = 1;
    
    return(
        <View>
            <Text>Lista de personagens</Text>
            <Button
                title={`Personagem - ${id}`}
                onPress={() => router.push(`/personagens/${id}`)}
            />
        </View>
    );
}