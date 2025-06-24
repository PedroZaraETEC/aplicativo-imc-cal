import React, { useEffect, useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function ImcForms() {
    const [altura, setAltura] = useState('');
    const [peso, setPeso] = useState('');
    const [resultado, setRes] = useState(0);
    const [exibir, setExibir] = useState(false);
    const [preenchido, setPreenchido] = useState(false);

    useEffect(() => {
        if (preenchido == false) {
            return;
        }
        console.log("Entrou no cálculo");
        calcular(Number(peso),Number(altura));
        setPreenchido(false);
    }, [preenchido]);

    function calcular(peso:number, altura:number) {
        if(peso == 0 && altura == 0) {
            return;
        }
        setRes(peso/(altura * altura));
    } 
    
    useEffect(() => {
        if(resultado > 0) {
            console.log(`Cálculo = ${resultado}`);
            console.log("Entrou na exibição");
            setExibir(true);
        }
    }, [resultado]);

    useEffect(() => {
        if (exibir == false) {
            return;
        }
    }, [exibir]);

    function exibirTexto() {
        console.log("Return View");
        console.log(resultado);
        return(
            <View>
                <Text style={style.textRes}>Resultado: {resultado.toFixed(2)}</Text>
            </View>
        );
    }

    return(
        <View>
            <Text style={style.text} >Altura:</Text>
            <TextInput style = {style.input} placeholder="Exemplo: 1.80m" keyboardType="numeric" value={altura} onChangeText={setAltura}/>
            <Text style={style.text}>Peso:</Text>
            <TextInput style = {style.input} placeholder="Exemplo: 70kg" keyboardType="numeric" value={peso} onChangeText={setPeso}/>
            <Button title="Calcular" onPress={() => 
            {
                if(altura != null && peso != null) {
                    setPreenchido(true);
                }
            }}/>

            {resultado != 0 ? exibirTexto():''}
        </View>
    );
}

const style = StyleSheet.create({
    input: {
        backgroundColor: "#ffffff",
        height: 50,
        padding: 20,
        borderRadius: 10,
        marginBottom: 20
    },

    text: {
        fontSize: 20
    },

    textRes: {
        marginTop:20
    }
})