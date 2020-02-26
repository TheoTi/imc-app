import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

export default function Inputs() {
  return (
    <View style={styles.inputs}>
      <TextInput
        placeholder="Peso"
        keyboardType="numeric"
        keyboardAppearance="dark"
        style={styles.input}
      />

      <TextInput
        placeholder="Altura"
        keyboardType="numeric"
        keyboardAppearance="dark"
        style={styles.input}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputs: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  input: {
    
  }
})