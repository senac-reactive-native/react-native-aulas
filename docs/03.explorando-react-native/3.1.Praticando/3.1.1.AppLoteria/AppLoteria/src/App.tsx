import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native'
import Loteria from './components/Loteria';

export default() => (
    <SafeAreaView style={style.App}>
       <Loteria quantidadeInicialDeNumeros={6} />
    </SafeAreaView>
)

const style = StyleSheet.create({
  App: {
      flexGrow: 1,
      justifyContent: "center",
      alignItems: "center",
      padding: 20
  },
})