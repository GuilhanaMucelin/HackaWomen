import React from 'react'

import { View, StyleSheet, StatusBar, SafeAreaView, Image, Dimensions } from 'react-native'

import Logo from '../../assets/img/logo.png'
import Menu from '../../assets/img/menu.png'
import Search from '../../assets/img/search.png'

const HEADER_MARGINTOP = Platform.OS === 'ios' ? 0 : 15;

const styles = StyleSheet.create({
    container: {
      height: 80,
      backgroundColor: '#42C2B5',
      flex: 0,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: "center",
      paddingHorizontal: 20,
      marginTop: HEADER_MARGINTOP,
      
    },
    statusBar: {
        backgroundColor: '#42C2B5'
    },
    menu: {
        height: 20,
        width: 30,
    },
    logo: {
        height: 28,
        width: 124,
    },
    search: {
        height: 37,
        width: 37,
    },
});


export default function Header() {
    return (
        <>
            <StatusBar translucent={true} backgroundColor="#42C2B5" barStyle="light-content" />
            <SafeAreaView style={styles.statusBar} />
            <View style={styles.container}>
            
            <Image
                source={Menu}
                resizeMode="contain"
                style={styles.menu}
            />
            <Image
                source={Logo}
                style={styles.logo}
                resizeMode="contain"
            />
            <Image
                source={Search}
                resizeMode="contain"
                style={styles.search}
            />
            </View>
        </>
    )
}