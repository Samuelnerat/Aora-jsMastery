import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Fonts from '../constants/fonts'

const InfoBox = ({title, subtitle, containerStyles, titleStyles}) => {
  return (
    <View className={containerStyles}>
      <Text style={[styles.text, titleStyles]}>{title}</Text>
      <Text style={styles.text2}>{subtitle}</Text>
    </View>
  )
}

export default InfoBox

const styles = StyleSheet.create({
    text:  {
        color: 'white',
        textAlign: 'center',
        fontSize: 16,
        fontFamily: Fonts.regular,      
    },
    text2: {
        textAlign: 'center',
        fontSize: 14,
        fontFamily: Fonts.regular,
        color: 'gray'
    }
})