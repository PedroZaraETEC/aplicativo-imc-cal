import React, { useState } from "react";
import { Button, TextInput, View, Text } from "react-native";

export default function Form() {
    const [exibir, setExibir] = useState(false);

    const [textoNome, setNome] = useState('');
    const [textoSenha, setSenha] = useState('');
    const [textoEmail, setEmail] = useState('');

    const[isSelected, setSelection] = useState('');
    function exibirTexto() {
        return (
            <View>
                <Text>{textoNome}</Text>
                <Text>{textoSenha}</Text>
                <Text>{textoEmail}</Text>
            </View>
        )
    }

    return (
        <View>
            <CheckBox onValueChange={setSelection}/><TextInput placeholder="Digite algo" onChangeText={setNome}/>
            <CheckBox onValueChange={setSelection}/><TextInput placeholder="Digite algo" onChangeText={setSenha}/>
            <CheckBox onValueChange={setSelection}/><TextInput placeholder="Digite algo" onChangeText={setEmail}/>

            <Button
                title="Mostrar dados"
                onPress={() => { setExibir(true) }} />

            {exibir ? exibirTexto() : ''}
            
      
            
        </View>
    )
}

/*const styles = StyleSheet.create({
    body: {
        backgroundColor: "orange",
    },
    text: {
        fontWeight: "bold"
    }
})*/