import { handleUrlParams } from "expo-router/build/fork/getStateFromPath-forks";
import React, { useState } from "react";
import { View, Image, StyleSheet, Button } from "react-native";
import {launchImageLibrary} from 'react-native-image-picker';



export default function FotoPerfil() {
    const [imagemEscolhida, setImageEscolhida] = useState(null);
    
    const openImagePicker = () => {
        const options = {
            mediaType: 'photo',
            includeBase64: false,
            maxHeight: 2000,
            maxWidth: 2000,
        };
        launchImageLibrary(options, handleUrlParams);
    }   

    /*function pegarImagem() {
        const resultado = await ImagePicker.launchImageLibrary(
        {
            storageOptions: {
              skipBackup: true,
              path: 'images', 
            
            }
        });*/

    return(
        <View>
            <Image
            style={styles.tinyLogo}
                source={{
                    uri:'https://reactnative.dev/img/tiny_logo.png',
                }}
            />
            <Button
                title='Trocar imagem'
                onPress = {() => {

                }}
            />

        </View>
    );
}

/*const style = StyleSheet.create({
    View: {
        backgroun
    }
})*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  }
});