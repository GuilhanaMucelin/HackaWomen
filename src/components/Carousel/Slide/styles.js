import React from 'react'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  slide: {
    backgroundColor: "white",
    paddingTop: 30,
    flexBasis: '100%',
    flex: 1,
    maxWidth: '100%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
  },
  slideText: {
    width: '100%',
    fontSize: 20,
  },
});

export default styles;