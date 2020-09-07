import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useLinkTo } from '@react-navigation/native';

import IconHome from '../../assets/img/iconHome.png'
import IconCategory from '../../assets/img/iconCategory.png'
import IconMedal from '../../assets/img/iconMedal.png'
import IconOffline from '../../assets/img/iconOffline.png'
import IconAudioteca from '../../assets/img/iconAudioteca.png'

import { TouchableOpacity } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
    container: {
        height: 48,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "white"

    },
    text: {
        fontSize: 8
    }
})

function Buttons({
    iconName,
    sizeIcon,
    title,
    router
}) {
    const linkTo = useLinkTo();
    return (
        <TouchableOpacity onPress={() => linkTo(router)}>
            <View styles={styles.buttons}>
                <Image resizeMode="contain" source={iconName} style={{
                    width: sizeIcon,
                    alignSelf: "center",
                }}/>
                <Text style={styles.text}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}


export default function Footer({ ative }) {
    return (
        <View style={styles.container} >
            <Buttons title="Inicio"     iconName={IconHome} sizeIcon={20} router='/Home' />
            <Buttons title="Categorias" iconName={IconCategory} sizeIcon={20} router='/' />
            <Buttons title="Conquistas" iconName={IconMedal} sizeIcon={20} router='/' />
            <Buttons title="Offline"    iconName={IconOffline} sizeIcon={20} router='/' />
            <Buttons title="Audioteca"  iconName={IconAudioteca} sizeIcon={20} router='/Audioteca' />
        </View>
    )
}