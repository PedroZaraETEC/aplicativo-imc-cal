import React, { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
import { useRouter } from "expo-router";

export default function HomeScreen() {
    const router = useRouter();

    return (
        <View>
            <Button
                title="Personagens"
                onPress={() => router.push('/personagens/')}
            />

            <Button
                title="Exercicio"
                onPress={() => router.push('/exercicio/')}
            />
        </View>
    );
}
