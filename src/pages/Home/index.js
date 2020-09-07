import React from 'react';

import {
  Text, View, StyleSheet, Image, Button
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import LeituraIcon from '../../assets/img/leituraIcon.png'
import Banner1 from '../../assets/img/banner-1.png'
import Banner2 from '../../assets/img/banner-2.png'
import Banner3 from '../../assets/img/banner-3.png'
import Banner4 from '../../assets/img/banner-4.png'
import Banner5 from '../../assets/img/banner-5.png'
import Footer from '../../components/Footer';
import Header from '../../components/Header';



const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 20
  },
  leituras: {
    height: 90,
    backgroundColor: "#CFB9FF",
    borderRadius: 5,
    position: "relative"
  },
  leiturasTopo: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  textLeitura: {
    color: "white",
    marginTop: 10,
    marginLeft: 5,
    fontSize: 18
  },
  textLeituraBold: {
    fontWeight: "bold",
  },
  leituraIcon: {
    width: 40,
    height: 30,
    marginLeft: 15,
    marginTop: 15
  },
  textLeituraBottom: {
    fontSize: 12,
    color: "#775AB6",
    marginLeft: 16,
  },
  iconArrow: {
    color: "white",
    top: "36%",
    position: "absolute",
    right: 20
  },
  containerBanner: {
    flexDirection: "row",

  },
  textBanner: {
    fontSize: 20,
    marginTop: 20,
    marginBottom: 10,
    fontWeight: "bold"
  },  
  banner: {
    width: 172,
    marginRight: 10
  }
})


export default function Home({ navigation }) {
  return (
    <>
    <Header />
    <View style={styles.container}>
      <View style={styles.leituras}>
        <View style={styles.leiturasTopo}>
          <Image
            source={LeituraIcon}
            resizeMode="contain"
            style={styles.leituraIcon}
          />
          <Text style={styles.textLeitura}><Text style={styles.textLeituraBold}>Audioteca</Text> de leitura</Text>
        </View>
        <View style={styles.leiturasBottom}>

          <Text style={styles.textLeituraBottom}>Agora o momento da leitura em família</Text>
          <Text style={styles.textLeituraBottom}>pode ser gravado na sua Audioteca.</Text>
        </View>
        <Icon
            style={styles.iconArrow}
            name='angle-right'
            size={25}
        />
      </View>

      <View>
        <Text style={styles.textBanner}>Destaques</Text>
        <View style={styles.containerBanner}>
          <Image
            source={Banner1}
            resizeMode="contain"
            style={styles.banner}
          />
          <Image
            source={Banner2}
            resizeMode="contain"
            style={styles.banner}
          />
          <Image
            source={Banner3}
            resizeMode="contain"
            style={styles.banner}
          />
        </View>
      </View>

      <View>
        <Text style={styles.textBanner}>Coleções Árvore</Text>
        <View style={styles.containerBanner}>
          <Image
            source={Banner3}
            resizeMode="contain"
            style={styles.banner}
          />
          <Image
            source={Banner4}
            resizeMode="contain"
            style={styles.banner}
          />
          <Image
            source={Banner5}
            resizeMode="contain"
            style={styles.banner}
          />
        </View>
      </View>

    </View>
    <Footer />
    </>
  )
};

