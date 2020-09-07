import React from 'react'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  stat: {
    backgroundColor: "white",
    paddingTop: 30,
    flexBasis: '33%',
    flex: 1,
    maxWidth: '33%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
  },
  statText: {
    width: '100%',
    textAlign: 'left',
    fontSize: 20,
  },
  statHold: {
    width: '100%',
  },
  statLabel: {
    width: '100%',
    fontSize: 11,
    fontWeight: '600',
  },
});

export default styles;