import React from 'react';

import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity
} from 'react-native';

import { useLinkTo } from '@react-navigation/native';
import Footer from '../../components/Footer/index'

import Banner1 from '../../assets/img/banner-1.png'
import Banner3 from '../../assets/img/banner-3.png'
import Banner6 from '../../assets/img/banner-6.png'
import Banner7 from '../../assets/img/banner-7.png'
import Banner8 from '../../assets/img/banner-8.png'
import Banner9 from '../../assets/img/banner-9.png'
import QueroLer from '../../assets/img/queroLer.png'
import QuemVaiLer from '../../assets/img/quemVaiLer.png'
import TimeImg1 from '../../assets/img/timeImg1.png'
import TimeImg2 from '../../assets/img/timeImg2.png'
import TimeImg3 from '../../assets/img/timeImg3.png'
import TimeImg4 from '../../assets/img/timeImg4.png'
import TimeImg5 from '../../assets/img/timeImg5.png'



const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 20
  },
  containerBanner: {
    flexDirection: "row",
    justifyContent: "space-around"
  },
  textBanner: {
    fontSize: 20,
    marginTop: 20,
    marginBottom: 10,
    fontWeight: "bold",
    marginLeft: 5
  },
  banner: {
    width: 159,
    height: 264
  },
  buttonLer: {
    width: 159,
    height: 159,
  },
  containerButton: {
    flexDirection: "row",
    justifyContent: "space-around"
  },
  timeimg: {
    width: 159,
    height: 30,
    marginTop: 5,
    alignItems: "center"
  },
  containerPlay: {
    marginBottom: 30,

  }

})

export default function Audioteca({ navigation }) {
  const linkTo = useLinkTo();
  return (
    <>
      <ScrollView >
        <View style={styles.container}>

          <Text style={styles.textBanner}>Minha audioteca</Text>
          <View style={styles.containerButton}>
            <TouchableOpacity onPress={() => linkTo('/QuemVaiLer')} >
              <Image
                style={styles.buttonLer}
                source={QuemVaiLer}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <TouchableOpacity
            >
              <Image
                style={styles.buttonLer}
                source={QueroLer}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>

          <View style={styles.containerPlay}>
            <Text style={styles.textBanner}>Contos feitos pelo Papai</Text>
            <View style={styles.containerBanner}>
              <View style={styles.banner}>
                <Image
                  source={Banner6}
                  style={styles.banner}
                />
                <Image
                  source={TimeImg4}
                  resizeMode="contain"
                  style={styles.timeimg}
                />

              </View>
              <View style={styles.banner}>
                <Image
                  source={Banner7}
                  style={styles.banner}
                />
                <Image
                  source={TimeImg3}
                  resizeMode="contain"
                  style={styles.timeimg}
                />

              </View>
            </View>
          </View>
          <View style={styles.containerPlay}>
            <Text style={styles.textBanner}>Contos feitos pela Vovó</Text>
            <View style={styles.containerBanner}>
              <View style={styles.banner}>
                <Image
                  source={Banner1}
                  style={styles.banner}
                />
                <Image
                  source={TimeImg1}
                  resizeMode="contain"
                  style={styles.timeimg}
                />
              </View>
              <View style={styles.banner}>
                <Image
                  source={Banner8}
                  style={styles.banner}
                />
                <Image
                  source={TimeImg2}
                  resizeMode="contain"
                  style={styles.timeimg}
                />
              </View>
            </View>
          </View>
          <View style={styles.containerPlay}>
            <Text style={styles.textBanner}>Contos feitos pela Mamãe</Text>
            <View style={styles.containerBanner}>
              <View style={styles.banner}>
                <Image
                  source={Banner3}
                  style={styles.banner}
                />
                <Image
                  source={TimeImg4}
                  resizeMode="contain"
                  style={styles.timeimg}
                />

              </View>
              <View style={styles.banner}>
                <Image
                  source={Banner9}
                  style={styles.banner}
                />
                <Image
                resizeMode="contain"
                  source={TimeImg5}
                  style={styles.timeimg}
                />
              </View>
            </View>
          </View>
          <View style={styles.containerPlay}>
            <Text style={styles.textBanner}>Outros contos</Text>
            <View style={styles.containerBanner}>
              <View style={styles.banner}>
                <Image
                  source={Banner6}
                  style={styles.banner}
                />
                <Image
                  source={TimeImg4}
                  style={styles.timeimg}
                  resizeMode="contain"
                />
              </View>
              <View style={styles.banner}>
                <Image
                  source={Banner7}
                  style={styles.banner}
                />
                <Image
                resizeMode="contain"
                  source={TimeImg3}
                  style={styles.timeimg}
                />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <Footer ative="/Audioteca"/>
    </>
  )
};

