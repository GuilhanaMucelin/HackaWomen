import React, { useState } from 'react'

import {
    Alert,
    Modal,
    StyleSheet,
    Text,
    TouchableHighlight,
    View,
    Image,
    SectionList,
    TouchableWithoutFeedback,
    TouchableOpacity
} from 'react-native'

import { useLinkTo } from '@react-navigation/native';

import ImagemHeaderModal from '../../assets/img/imagemHeaderModal.png'
import Apple from '../../assets/img/apple.png'
import AppleActive from '../../assets/img/appleActive.png'
import BannerSorteio from '../../assets/img/bannerSorteio.png'
import AppleSorteio from '../../assets/img/appleSorteio.png'
import MacacoSorteado from '../../assets/img/macacoSorteado.png'
import Footer from '../../components/Footer'
import { color } from 'react-native-reanimated';



const Item = ({ title }) => (
    <View style={styles.item}>
        <Image
            style={styles.apple}
            source={title.active === 'appleActive' ? AppleActive : Apple}
        />
        <Text style={styles.title}>{title.name}</Text>
    </View>
);
let pessoaSorteada = ''
export default function QuemVaiLer() {
    const DATA = [
        {
            data: [
                { active: "apple", name: "Mamãe Ana" },
                { active: "appleActive", name: "Papai Carlos" },
                { active: "apple", name: "Mano" },
                { active: "appleActive", name: "Vovó Maria" },
                { active: "apple", name: "Novo" },
            ]
        }
    ];
    const [modalVisible, setModalVisible] = useState(true);
    const [modalSorteio, setModalSorteio] = useState(false);
    const linkTo = useLinkTo();
    
    const sortear = () => {
        const sorteio = ['Vovó Maria', 'Papai Carlos']
        const numeroSorteado = Math.floor(Math.random() * sorteio.length)
        pessoaSorteada = sorteio[numeroSorteado]
    }

    return (
        <>
            <View style={styles.centeredView}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>

                            <Image
                                source={ImagemHeaderModal}
                                style={styles.headerImage}
                            />
                            <View style={styles.containerModal}>
                                <View style={styles.headerModal}>
                                    <Text style={styles.headerTextoModal}>Quem pode ler hoje?</Text>
                                </View>

                                <View style={styles.mainModal}>
                                    <SectionList
                                        sections={DATA}
                                        keyExtractor={(item, index) => item + index}
                                        renderItem={({ item }) => <Item title={item} />}
                                    />
                                    <TouchableHighlight
                                        style={{ ...styles.buttonConfirmation, backgroundColor: "#2196F3" }}
                                        onPress={() => {
                                            setModalVisible(!modalVisible);
                                        }}
                                    >
                                        <Text style={styles.buttonConfirmation}>Pronto!</Text>
                                    </TouchableHighlight>
                                </View>
                            </View>

                        </View>
                    </View>
                </Modal>




                <View style={styles.containerBannerSorteio}>
                    <Text style={styles.textH1}>Quem vai ler pra mim?</Text>
                    <Text style={styles.textH2}>Colha sua maçã e descubra:</Text>
                    <Image source={BannerSorteio} style={styles.bannerSorteio}
                        resizeMode="contain"
                    />

                    <TouchableWithoutFeedback
                        style={styles.apple1}
                        onPress={() => {
                            sortear()
                            setModalSorteio(!modalSorteio);
                        }}
                    >
                        <Image source={AppleSorteio} style={styles.apple1}
                            resizeMode="contain"
                        />
                    </TouchableWithoutFeedback>

                    <TouchableWithoutFeedback
                        style={styles.apple2}
                        onPress={() => {
                            sortear()
                            setModalSorteio(!modalSorteio);
                        }}
                    >
                        <Image source={AppleSorteio} style={styles.apple2}
                            resizeMode="contain"
                        />
                    </TouchableWithoutFeedback>

                    <TouchableWithoutFeedback
                        style={styles.apple3}
                        onPress={() => {
                            sortear()
                            setModalSorteio(!modalSorteio);
                        }}
                    >
                        <Image source={AppleSorteio} style={styles.apple3}
                            resizeMode="contain"
                        />
                    </TouchableWithoutFeedback>

                    <TouchableWithoutFeedback
                        style={styles.apple4}
                        onPress={() => {
                            sortear()
                            setModalSorteio(!modalSorteio);
                        }}
                    >
                        <Image source={AppleSorteio} style={styles.apple4}
                            resizeMode="contain"
                        />
                    </TouchableWithoutFeedback>

                    <TouchableWithoutFeedback
                        style={styles.apple5}
                        onPress={() => {
                            
                            sortear()
                            setModalSorteio(!modalSorteio);
                        }}
                    >
                        <Image
                            source={AppleSorteio}
                            style={styles.apple5}
                            resizeMode="contain"
                        />
                    </TouchableWithoutFeedback>
                </View>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalSorteio}
                    style={styles.modalContainerResultadoSorteio}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>

                            <Image
                                source={AppleSorteio}
                                resizeMode="contain"
                                style={styles.headerAppleSorteio}
                            />
                            <View style={styles.containerModalSorteado}>
                                <View style={styles.headerModal}>
                                    <Text style={styles.headerTextoModal}>OBA!</Text>
                                </View>

                                <View style={styles.mainModal}>
                                    <Text style={{
                                        fontSize: 14,
                                        justifyContent: "center",
                                        alignItems: "center",
                                        textAlign: "center",
                                        marginTop: 5
                                    }}>A leitura hoje é com</Text>
                                    <Text style={{
                                        fontSize: 27,
                                        justifyContent: "center",
                                        alignItems: "center",
                                        textAlign: "center",
                                        marginTop: 5,
                                        color: "#FFA07A",
                                        marginTop: 22,
                                        marginBottom: 22
                                    }}>{pessoaSorteada}</Text>

                                    <TouchableWithoutFeedback
                                        style={{ ...styles.buttonConfirmation, backgroundColor: "#2196F3", marginTop: 20, zIndex: 999 }}
                                        onPress={() => linkTo('/Colecao')}
                                    >
                                        <Text style={styles.buttonConfirmation}>Escolher um livro</Text>
                                    </TouchableWithoutFeedback>
                                    
                                    <TouchableHighlight style={styles.containerButtonTroca} onPress={() => setModalSorteio(!modalSorteio)} >
                                        <Text style={styles.buttonTroca}>Trocar</Text>
                                    </TouchableHighlight>
                                </View>
                            </View>

                            <Image
                                source={MacacoSorteado}
                                resizeMode="contain"
                                style={styles.macacoSorteado}
                            />

                        </View>
                    </View>
                </Modal>
            </View>
            <Footer />
        </>
    );
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    modalView: {
        flex: 1,
        backgroundColor: "#42C2B5",
        width: "100%",
        alignItems: "center",
        position: "relative"
    },
    containerModal: {
        position: "absolute",
        backgroundColor: "white",
        width: 253,
        height: 377,
        top: "20%",
        borderRadius: 10
    },
    headerModal: {
        backgroundColor: "#8553F4",
        height: 71,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    headerTextoModal: {
        color: "white",
        fontWeight: "500",
        fontSize: 16,
        textAlign: "center",
        marginTop: 25
    },
    headerImage: {
        top: "4.5%",
        marginLeft: 10,
        zIndex: 99,
    },
    headerAppleSorteio: {
        width: 110,
        height: 98,
        top: "7%",
        marginLeft: 10,
        zIndex: 99
    },
    mainModal: {
        flex: 1,
        paddingHorizontal: 10
    },
    buttonConfirmation: {
        height: 46,
        textAlign: "center",
        textAlignVertical: "center",
        display: "flex",
        bottom: 0,
        backgroundColor: "#6FCF97",
        borderRadius: 15,
        color: "white",
        marginBottom: 15
    },
    openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    item: {
        flexDirection: "row",
        height: 20,
        marginVertical: 12,
        marginHorizontal: 10
    },
    title: {
        fontSize: 14,
        color: "#4F4F4F"
    },
    apple: {
        marginRight: 5,
        marginTop: -3
    },
    containerBannerSorteio: {
        justifyContent: "flex-start",
        flex: 1,
    },
    bannerSorteio: {
        height: 400,
        width: 300,
        top: 22
    },
    textH1: {
        marginTop: 22,
        justifyContent: "center",
        textAlign: "center",
        color: "#8553F4",
        fontSize: 20,
        textTransform: "uppercase",
        fontWeight: "bold"
    },
    textH2: {
        marginTop: 15,
        justifyContent: "center",
        textAlign: "center",
        color: "#666666",
        fontSize: 14
    },
    apple1: {
        position: "absolute",
        top: 138,
        left: 150
    },
    apple2: {
        position: "absolute",
        top: 145,
        left: 66
    },
    apple3: {
        position: "absolute",
        top: 245,
        left: 25
    },
    apple4: {
        position: "absolute",
        top: 260,
        left: 198
    },
    apple5: {
        position: "absolute",
        top: 335,
        left: 75,
    },
    modalContainerResultadoSorteio: {
        flex: 1,
        backgroundColor: "#42C2B5",
        width: "100%",
        alignItems: "center",
    },
    modalResultadoSorteio: {
        backgroundColor: "#42C2B5",
        width: "100%",
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    containerModalSorteado: {
        position: "absolute",
        backgroundColor: "white",
        width: 253,
        height: 278,
        top: "20%",
        borderRadius: 10
    },
    buttonTroca: {
        textDecorationLine: "underline",
        color: "#BDBDBD",
        fontWeight: "bold",
        backgroundColor: "#fff",
        width: 45
    },
    containerButtonTroca: {
        backgroundColor: "#fff",
        marginLeft: 5,
        color: "#fff",
        width: 45
    },
    macacoSorteado: {
        position: "absolute",
        top: "52%",
        left: "28%"
    }
});