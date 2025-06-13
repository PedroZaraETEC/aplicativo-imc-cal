import { handleUrlParams } from "expo-router/build/fork/getStateFromPath-forks";
import React, { useState } from "react";
import { View, Image, StyleSheet, Button } from "react-native";
import {launchImageLibrary} from 'react-native-image-picker';
import ImagePicker from 'react-native-image-picker';

//Image picker

export default function FotoPerfil() {
    const [imagemEscolhida, setImageEscolhida] = useState(null);
    
const setImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images', 'videos'],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
}

    const result = await launchImageLibrary(options?);
    
    ImagePicker.launchImageLibrary(options, (response) => {
      console.log('Resposta', response);

      if (response.didCancel) { 
        console.log('Seleção Cancelada!');
      } else if (response.error) {
        console.log('Erro', response.error);
      } else if (response.customButton) {
        console.log('Botão Customizado', response.customButton);
      } else {
        const source = { uri: response.uri };
      }
    });

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