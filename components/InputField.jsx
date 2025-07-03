import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native'
import React, {useState} from 'react'
import {icons} from "../constants"
import Fonts from '../constants/fonts';

const InputField = ({title, value, placeholder, otherStyles, handleChangeText}) => {
    const [showPassword, setShowPassword] = useState(false);
    const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={[styles.main, otherStyles]}>
      <Text style={styles.title}>{title}</Text>
      {/* <View style={styles.view}> */}
       <View style={[styles.view, isFocused && styles.viewFocused]}>
        {/* <TextInput  style={styles.input} value={value} placeholder={placeholder} placeholderTextColor="#7b7b8b" onChangeText={handleChangeText} secureTextEntry={title === "Password" && !showPassword}/> */}
       <TextInput  style={styles.input} value={value} placeholder={placeholder} placeholderTextColor="#7b7b8b" onChangeText={handleChangeText} secureTextEntry={title === "Password" && !showPassword} onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)} />
      {title === "Password" && (
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Image source={!showPassword ? icons.eye : icons.eyeHide} resizeMode='contain' style={{width: 24, height: 24}}/>
        </TouchableOpacity>
      )}
      </View>
    </View>
  )
}

export default InputField

const styles = StyleSheet.create({
    main: {
        marginBottom: 2,
    },
    title: {
        fontSize: 16,
        // fontWeight: 'bold',
        fontFamily: Fonts.medium,
        paddingBottom: 5,
        color: "#CDCDE0"
    },
    // view: {
    //     flexDirection: 'row',
    //     alignItems: 'center',
    //     // justifyContent: 'space-between',
    //     paddingVertical: 25,
    //     width: '100%',
    //     height: 16,
    //     paddingHorizontal: 12,
    //     backgroundColor: '#1E1E2D',
    //     color: '#fff',
    //     borderRadius: 10,
    //     focus: {
    //         borderColor: '#FF8E01',
    //     }
    // },
      view: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 12,
    width: '100%',
    backgroundColor: '#1E1E2D',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'transparent', 
  },
    viewFocused: {
    borderColor: '#FF8E01', 
  },
    input: {
        flex: 1,
        height: 42,
        fontSize: 16,
        fontFamily: Fonts.semiBold,
        color: '#fff',
        // paddingVertical: 10,
    }
}) 
