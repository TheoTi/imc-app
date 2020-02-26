import React, { useState } from 'react';
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Constants from 'expo-constants'

// components
import Inputs from './components/Inputs'

import logo from './assets/logo.png'

export default function App() {
  const [imc, setImc] = useState(0)
  const [indice, setIndice] = useState('Índice')

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={logo}
        resizeMode="contain"
      />

      <Inputs />

      <TouchableOpacity>
        <Text>
          Calcular
        </Text>
      </TouchableOpacity>

      <View>
        <Text>{imc}</Text>
        <Text>{indice}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Constants.statusBarHeight,
  },
});
