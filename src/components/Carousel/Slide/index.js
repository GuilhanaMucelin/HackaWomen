import React from 'react'
import { View, Image, TouchableOpacity } from 'react-native'
import { useLinkTo } from '@react-navigation/native';
import { styles } from './styles'

export const Slide = (props) => {

  const { caminho, rota } = props;
  const linkTo = useLinkTo();

  return (
    <View style={styles.slide}>
      <TouchableOpacity onPress={() => linkTo(rota)}>
        <Image source={caminho} resizeMode="contain" />
      </TouchableOpacity>
    </View>
  );
}

export default Slide;