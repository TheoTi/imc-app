import React, { useState } from 'react'
import { Dimensions, Image, Modal, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import Constants from 'expo-constants'

import logo from '../assets/logo.png'
import indice from '../assets/indices.png'

const { width } = Dimensions.get('screen')

export default function Question(props) {
  const [isVisible, setIsVisible] = useState(props.isVisible)

  return (
    <View>
      <Modal
        visible={isVisible}
        animationType="fade"
        style={styles.container}
      >
        <Image source={logo} resizeMode="contain" style={styles.logo}/>
        <View style={styles.indice}>
          <Image source={indice} resizeMode="contain" style={styles.indice}/>
        </View>

        <TouchableOpacity
          style={styles.btnClose}
          onPress={() => setIsVisible(!isVisible)}
        >
          <AntDesign
            name="closecircleo"
            color="#c00"
            size={38}
          />
        </TouchableOpacity>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  btnClose: {
    position: 'absolute',
    bottom: 20,
    right: 30,
  },
  logo: {
    width: 200,
    height: 200,
    position: 'absolute',
    top: -10,
    left: ((width / 2) / 2) + 25,
  },
  indice: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
    width: width - 100,
  }
})