import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Fonts from '../constants/fonts';

const Btn = ({title, handlesPress, style, textStyle}) => {
  return (
    <TouchableOpacity onPress={handlesPress} activeOpacity={0.7} style={[styles.opacity, style]}>
      <Text styles={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  )
}

export default Btn

const styles = StyleSheet.create({
    opacity: {
        backgroundColor: '#FF9C01',
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
        minHeight: 62,
        justifyContent: 'center',
        alignContent: 'center',
    },
    text: {
        color: '#1',
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: Fonts.bold,
    }
})