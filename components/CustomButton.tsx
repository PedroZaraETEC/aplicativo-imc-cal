import React from "react";
import { TouchableOpacity,Text } from "react-native";

interface Props {
    title: string
}

//Dica: Utilizar o mesmo nome da função com o arquivo
export default function CustomButton({title}: Props) {
    return (
        <TouchableOpacity>
            <Text>{title}</Text>
        </TouchableOpacity>
    )
}
