import React from 'react'

import {
    View,
    ImageBackground,
    StyleSheet,
    Button
} from 'react-native';

import { useLinkTo } from '@react-navigation/native';
import TelaResumoLivro from '../../assets/img/telaResumoLivro.png'

export default function ResumoLivro() {
    const linkTo = useLinkTo();
    return (
        <>
        <View style={styles.container}>
            <ImageBackground source={TelaResumoLivro} style={styles.image} />
        </View>
        <Button onPress={() => linkTo('/Livro')} color="#42C2B5" title="Ler agora" />
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column"
    },
    image: {
        flex: 1,
        justifyContent: "center"
    },
    buttons: {
      backgroundColor: "#42C2B5" ,
      
    }
})