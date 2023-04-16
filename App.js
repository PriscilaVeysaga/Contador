import React from 'react'
import { View, StyleSheet } from 'react-native'
import Contador from './src/Contador'

export default () => (
    <View style={style.container}>
      <Contador inicial={500}/>
    </View>
  )


const style = StyleSheet.create({ 
  container: {
    backgroundColor: '#E6E6FA',
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center"
  },
})