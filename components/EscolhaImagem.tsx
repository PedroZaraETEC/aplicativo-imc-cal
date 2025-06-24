import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ImageLibraryOptions, launchCamera, launchImageLibrary } from 'react-native-image-picker';

export default function EscolhaImagem() {
    const [imagem, setImagem] = useState('https://img.myloview.com.br/quadros/icone-de-vetor-de-usuario-de-perfil-700-146325654.jpg');

    const opcoes : ImageLibraryOptions = {
            mediaType: "photo",
            quality: 1
        }
    
        const SetGaleria = async () => {
            const resul = await launchImageLibrary(opcoes);
            if (resul.didCancel == true ) {
                return alert ("Imagem não foi selecionada");
            }
            console.log(resul);
            setImagem(resul?.assets?.[0]?.uri || '');
            alert("Galeria");
        };
    
        const SetCamera = async () => {
            const resul = await launchCamera(opcoes);  
            if (resul.didCancel == true ) {
                return alert ("Imagem não foi selecionada");
            }
            setImagem(resul?.assets?.[0]?.uri || '');
            
            alert("Camera");
        };
        
        return(
            <View>
                <Image
                    resizeMode="contain"
                    source={{
                    uri: imagem
                    }}
                    style={style.imagem}
                />

            <TouchableOpacity style={style.button} onPress={SetCamera}>
                <Text style={style.textButton}>Câmera</Text>
            </TouchableOpacity>

            <TouchableOpacity style={style.button} onPress={SetGaleria}>
                <Text style={style.textButton}>Arquivos</Text>
            </TouchableOpacity>
            </View>
        );
}

const style = StyleSheet.create({
    body: {
        flex:1,
        justifyContent: "center", 
        alignItems: "center" 
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
        backgroundColor:'#2196f3',
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
        flex: 1,
        alignItems: "center"
    },

    saveButton: {
        backgroundColor: "#2196f3", 
        width: "40%", 
        height: 40, 
        justifyContent: "center", 
        alignItems:"center", 
        borderRadius: 10, 
        marginTop: 20
    }
});