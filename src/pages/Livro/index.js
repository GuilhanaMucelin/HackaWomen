import React, {useState} from 'react'
import { 
    View,
    TouchableWithoutFeedback,
    StyleSheet,
    Text,
    Image
} from 'react-native'

import { useLinkTo } from '@react-navigation/native';

import Livro1 from '../../assets/img/livro1.png'
import Livro2 from '../../assets/img/livro2.png'
import Livro3 from '../../assets/img/livro3.png'
import OttoFeliz from '../../assets/img/ottoFeliz.png'
import Carousel from '../../components/Carousel';

export default function Livro() {
    const [buttonAudio, setbuttonAudio] = useState(false);
    const statysButtonAudio = buttonAudio === true ? "#FFA07A" : "#42C2B5"
    const linkTo = useLinkTo();

    return (
        <View style={styles.container}>
            <View style={styles.carousel}>
                <Carousel
                    style='slide'
                    items={[
                        {
                            caminho: Livro1,
                            rota: '/ResumoLivro'
                        },
                        {
                            caminho: Livro2,
                            rota: '/ResumoLivro'
                        },
                        {
                            caminho: Livro3,
                            rota: '/ResumoLivro'
                        }
                    ]}
                />
            </View>
            <View style={styles.containerButton}>
                <TouchableWithoutFeedback  style={styles.button} onPress={() => {
                    setbuttonAudio(!buttonAudio);
                }}>
                    <View>
                        <Text style={{...styles.buttonText, backgroundColor: statysButtonAudio}}>
                            { buttonAudio === false ?  'Gravar a leitura' : "Salvar na Áudioteca"}
                        </Text>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback  style={styles.button} onPress={() => linkTo('/ReviewLivro')}>
                    <Image source={OttoFeliz}  style={styles.ottofeliz}/>
                </TouchableWithoutFeedback>
                
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        top: 0
    },
    carousel: {
        flex: 1,
        top: -30
    },
    containerButton: {
        height: 146,
        backgroundColor: "white",
        paddingHorizontal: 15,
    },
    button: {
        width: "100%",
        marginTop: 10,
    },
    buttonText: {
        borderRadius: 10,
        height: 46,
        textAlign: "center",
        justifyContent: "center",
        width: "100%",
        paddingTop: 13,
        color: "white"
    },
    ottofeliz: {
        position: 'absolute',
        right: 8,
        top: -15
    }
})