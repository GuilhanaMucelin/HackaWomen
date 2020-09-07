import React from 'react'

import {
    View,
    ImageBackground,
    StyleSheet
} from 'react-native';

import TelaGameApp from '../../assets/img/telaGameApp.png'
import Footer from '../../components/Footer';

export default function GameApp() {
    return (
        <>
        <View style={styles.container}>
            <ImageBackground source={TelaGameApp} style={styles.image} />
        </View>
        <Footer />
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