import React, { useState } from 'react';
import { Dimensions, Image, KeyboardAvoidingView, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Constants from 'expo-constants'
import { AntDesign } from '@expo/vector-icons'

import logo from './assets/logo.png'

import Question from './components/Question'
import ButtonClear from './components/ButtonClear'

const { width } = Dimensions.get('screen')

export default function App() {
  const [imc, setImc] = useState(0)
  const [indice, setIndice] = useState('')
  const [peso, setPeso] = useState(0)
  const [altura, setAltura] = useState(0)
  const [modalVisible, setModalVisible] = useState(false)

  const handleCalc = () => {
    setImc(peso / (altura * altura))
    console.log(imc)
    if (imc < 18.5) {
      setIndice('Baixo Peso')
    }
    else if (imc <= 24.9) {
      setIndice('Peso Ideal')
    }
    else if (imc <= 29.9) {
      setIndice('Sobrepeso')
    }
    else if (imc <= 34.9) {
      setIndice('Obesidade I')
    }
    else if (imc <= 39.9) {
      setIndice('Obesidade II')
    }
    else {
      setIndice('Obesidade III')
    }
  }

  const handleClearInput = () => {
    setImc(0)
    setIndice('')
  }

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={logo}
        resizeMode="contain"
        style={styles.logo}
      />

      <KeyboardAvoidingView
        behavior="padding"
        enabled
      >
        <View style={styles.inputs}>
          <TextInput
            placeholder="Peso"
            placeholderTextColor="#6c7a86"
            selectionColor="#6c7a86"
            maxLength={6}
            keyboardType="numeric"
            style={styles.input}
            onChangeText={peso => setPeso(peso.split(',').join('.'))}
            onChange={peso => peso == '' ? setPeso(1) : false}
          />

          <TextInput
            placeholder="Altura"
            placeholderTextColor="#6c7a86"
            selectionColor="#6c7a86"
            maxLength={4}
            keyboardType="numeric"
            style={styles.input}
            onChangeText={altura => setAltura(altura.split(',').join('.'))}
            onChange={altura => altura == '' ? setAltura(1) : false}
          />
        </View>
      </KeyboardAvoidingView>

      <TouchableOpacity
        style={styles.btnCalcular}
        onPress={() => handleCalc()}
      >
        <Text style={styles.btnText}>
          Calcular
        </Text>
      </TouchableOpacity>

      <View style={styles.result}>
        <Text style={styles.resultText}>{imc.toFixed(2)}</Text>
        <Text style={styles.resultText}>{indice}</Text>
      </View>

      <TouchableOpacity
        activeOpacity={0.4}
        style={styles.btnQuestion}  
        onPress={() => setModalVisible(!modalVisible)}
      >
        <AntDesign
          name="questioncircleo"
          color="#c00"
          size={38}
        />
      </TouchableOpacity>
      {imc != 0 ? <ButtonClear clear={() => handleClearInput()}/> : false}

      {modalVisible && <Question isVisible={modalVisible}/>}
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
  logo: {
    width: 200,
    height: 200,
    position: 'absolute',
    top: 0,
    left: ((width / 2) / 2) + 25,
  },
  inputs: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'stretch',
    marginBottom: 45,
    height: 30,
  },
  input: {
    marginHorizontal: 25,
    paddingHorizontal: 25,
    borderBottomWidth: 2,
    borderBottomColor: '#aaa9ad',
    height: 50,
    fontSize: 24,
    padding: 10,
    textAlign: 'center'
  },
  btnCalcular: {
    width: 200,
    justifyContent: 'center',
    alignItems: 'stretch',
    borderWidth: 1,
    borderColor: '#f00',
    borderRadius: 10,
    backgroundColor: '#fff',
    padding: 16,
    marginTop: 20,
  },
  btnText: {
    color: '#c00',
    fontSize: 18,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  result: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 30
  },
  resultText: {
    padding: 10,
    fontSize: 24,
    color: '#c0c0c0',
    textTransform: 'uppercase'
  },
  btnQuestion: {
    position: 'absolute',
    bottom: 20,
    right: 30,
  },
});
