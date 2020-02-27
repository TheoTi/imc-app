import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function ButtonClear(props) {
  return (
    <View>
        <TouchableOpacity
            style={styles.btn}
            onPress={props.clear}
        >
            <Text style={styles.btnText}>Limpar</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    btn: {
        width: 200,
        justifyContent: 'center',
        alignItems: 'stretch',
        borderWidth: 1,
        borderColor: '#0d0d0d',
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
})