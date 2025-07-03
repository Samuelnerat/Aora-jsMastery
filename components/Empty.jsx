import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { images } from '../constants'
import Fonts from '../constants/fonts'
import Btn from './Btn'
import  { router } from 'expo-router'

const Empty = ({title, subtitle}) => {
  return (
    <View style={styles.main}>
        <Image source={images.empty} resizeMode='contain' width={100} height={100} style={styles.img} />
      <Text style={styles.text}>{title}</Text>
      <Text style={styles.text2}>{subtitle}</Text>

      <Btn title="Create a Video" handlesPress={() => router.push('/create')} style={styles.container}/>
    </View>
  )
}

export default Empty

const styles = StyleSheet.create({
    main: {
        // flex: 1,
        // backgroundColor: '#161622',
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    img: {
        width: 270,
        height: 215,
    },
    text: {
        color: '#fff',
        fontSize: 16,
        fontFamily: Fonts.semiBold,
        textAlign: 'center',
        marginTop: 20,
    },
    text2: {
        color: '#fff',
        fontSize: 20,
        fontFamily: Fonts.medium,
    },
    container: {
        marginVertical: 20,

        width: '100%'    }

})