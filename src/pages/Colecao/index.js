import React, { useState } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native';

import BannerDinoussauro1 from '../../assets/img/bannerDinossauro1.png'
import BannerDinoussauro2 from '../../assets/img/bannerDinossauro2.png'
import Matinho from '../../assets/img/matinho.png'
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';

export default function Colecao() {
    return (
        <>
        <View style={styles.container} >
            <Text style={styles.titulo} >
                Vocês estão lendo a coleção:
            </Text>
            <Text style={styles.subtitulo}>
                Dinossauros
            </Text>
            <Carousel
                style='slide'
                items={[
                    {
                        caminho: BannerDinoussauro2,
                        rota: '/Home'
                    },
                    {
                        caminho: BannerDinoussauro1,
                        rota: '/ResumoLivro'
                    }
                ]}
            />
            <Image
                style={styles.matinho}
                source={Matinho}
                resizeMode="contain"
            />
        </View>
        <Footer />
        </>
    );
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        flex: 1
    },
    titulo: {
        marginTop: 20,
        marginLeft: 10
    },
    subtitulo: {
        fontSize: 31,
        fontWeight: "bold",
        textAlign: "center",
        marginTop: 10
    },
    matinho: {
        flex: 1,
        bottom: -65
    },
})