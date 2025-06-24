import EscolhaImagem from "@/components/EscolhaImagem";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Home() {
    const [nome, setNome] = useState('');
    const [resul, setResul] = useState('');
    const [visibilidade, setVisu] = useState("hidden")
    
    function mudarNome() {
        setNome(resul);
    }

    useEffect(() => alert(`Troca sucedida\nBem vindo(a) ${nome}`), [nome])

    useEffect(() => {
        if(resul != "") {
            console.log("resul");
            setVisu("");
        }

        else {
            setVisu("hidden");
        }
    }, [resul]);

    return(

        <View style={style.body}>

            <EscolhaImagem/>

            <Text>Bem vindo {nome}</Text>

            <View style = {style.inputNome}>
                <Text style = {{marginBottom: 5, width: "100%"}}>Inisira o seu nome: </Text>
                <TextInput style={{backgroundColor: "#a0a0a0", borderRadius: 10, paddingLeft: 10, width: "100%", height: 40}} placeholder="Digite o seu Nome" onChangeText={setResul}/>
                
                <TouchableOpacity style={{
                    backgroundColor: "#ff4700", 
                    width: "40%", 
                    height: 40, 
                    justifyContent: "center", 
                    alignItems:"center", 
                    borderRadius: 10, 
                    marginTop: 20,
                    visibility: visibilidade
                }} onPress={() => {mudarNome()}}> 

                <Text style={style.textButton}>Salvar</Text>
                </TouchableOpacity>
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

    imagem: {
        backgroundColor: '#ffffff',
        width:200,
        height:200,
        borderRadius:1000,
        marginBottom: 60,
        marginTop: 60,
        resizeMode: 'contain',
        alignSelf: 'center'
    },

    button: {
        width: 200,
        height: 50,
        backgroundColor: '#000000',
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },

    textButton: {
        color: "#fff",
        fontSize: 16,
        fontWeight: '900'
    },

    inputNome: {
        width: 300,
        marginTop: 20,
        alignItems: "center",
        height: 200
    },

    saveButton: {
        backgroundColor: "#ff4700", 
        width: "40%", 
        height: 40, 
        justifyContent: "center", 
        alignItems:"center", 
        borderRadius: 10, 
        marginTop: 20
    }
});