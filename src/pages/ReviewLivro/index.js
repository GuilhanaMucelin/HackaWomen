import React, { useState } from 'react'

import {
    View,
    StyleSheet,
    ImageBackground,
    TouchableWithoutFeedback,
    Image,
    Modal
} from 'react-native'

import { useLinkTo } from '@react-navigation/native';
import ReviewLivroBanner from '../../assets/img/reviewLivro.png'
import Close from '../../assets/img/close.png'
import OttoFeliz from '../../assets/img/ottoPequeno.png'
import OttoTiti from '../../assets/img/ottoTiti.png'


export default function ReviewLivro() {
    const linkTo = useLinkTo();
    const [OttoFelizClicado, setOttoFelizClicado] = useState(false);
    const [OttoTitiClicado, setOttoTitiClicado] = useState(false);
    return (
        <>
            <TouchableWithoutFeedback style={styles.button} onPress={() => linkTo('/GameApp')}>
                <Image source={Close} style={styles.close} />
            </TouchableWithoutFeedback>

            <View style={styles.container}>
                <ImageBackground source={ReviewLivroBanner} style={styles.image} />
            </View>

            <TouchableWithoutFeedback style={styles.button} onPress={() => setOttoFelizClicado(!OttoFelizClicado)}>
                <Image resizeMode="cover" source={OttoFeliz} style={styles.ottofeliz} />
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback style={styles.button} onPress={() => setOttoTitiClicado(!OttoTitiClicado)}>
                <Image resizeMode="cover" source={OttoTiti} style={styles.ottotiti} />
            </TouchableWithoutFeedback>
            <Modal
                animationType="none"
                transparent={true}
                visible={OttoFelizClicado}
                style={styles.modalContainerResultadoSorteio}
            >
                <TouchableWithoutFeedback style={styles.button} onPress={() => setOttoFelizClicado(!OttoFelizClicado)}>
                    <Image resizeMode="cover" source={OttoFeliz} style={styles.ottofelizModal} />
                </TouchableWithoutFeedback>
            </Modal>
            <Modal
                animationType="none"
                transparent={true}
                visible={OttoTitiClicado}
                style={styles.modalContainerResultadoSorteio}
            >
                <TouchableWithoutFeedback style={styles.button} onPress={() => setOttoTitiClicado(!OttoTitiClicado)}>
                <Image resizeMode="cover" source={OttoTiti} style={styles.ottotitiModal} />
                </TouchableWithoutFeedback>
            </Modal>
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
        backgroundColor: "#42C2B5",
    },
    close: {
        position: "absolute",
        top: 115,
        left: 48,
        zIndex: 999
    },
    ottofeliz: {
        position: "absolute",
        top: 380,
        left: 100,
    },
    ottofelizModal: {
        position: "absolute",
        top: 425,
        left: 90,
        width: 107,
        height: 61
    },
    ottotiti: {
        position: "absolute",
        top: 376,
        left: 210
    },
    ottotitiModal: {
        position: "absolute",
        top: 425,
        left: 200,
        width: 107,
        height: 61
    }
})