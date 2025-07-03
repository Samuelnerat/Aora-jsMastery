import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Alert } from 'react-native'
import React, {useState} from 'react';
import {icons} from "../constants"
import Fonts from '../constants/fonts';

const Search = () => {
    const [value, setValue] = useState("");
    const [search, setSearch] = useState("");
    const [isFocused, setIsFocused] = useState(false);

  return (
    // <View style={styles.main}>
    <View style={[styles.main, isFocused && styles.viewFocused]}>
      {/* <TextInput value={search} placeholder='Search for a video topic' placeholderTextColor="#CDCDE0"/> */}
        <TextInput
            value={value}
            onChangeText={(text) => setValue(text)}
            placeholder="Search for a video topic"
            placeholderTextColor="#7b7b8b"
            style={styles.input}
            onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)}
            />


      <TouchableOpacity onPress={() => {
        // if (value.length > 0) {
        //   setSearch(value);
        //   setValue("");
        //   Alert.alert("Missing Query", "Please input something to search results across database")
        // }

        if (value.length === 0) {
  Alert.alert("Missing Query", "Please input something to search results across database");
} else {
  setSearch(value);
  setValue("");
}

      }}>

        <Image source={icons.search} resizeMode='contain' style={{width: 18, height: 18}}/>
      </TouchableOpacity>
    </View>
  )
}

export default Search

const styles = StyleSheet.create({
    main: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 5,
        width: '100%',
        paddingHorizontal: 12,
        backgroundColor: '#1E1E2D',
        borderRadius: 10,
        borderColor: 'transparent',
        borderWidth: 1,
    },
        viewFocused: {
    borderColor: '#FF8E01', 
  },
    // input: {
    //     // marginTop: 1,
    //     flex: 1,
    //     color: 'white',
    //     fontSize: 16,
    //     fontFamily: Fonts.regular,
    //     height: 40,
    // },
        input: {
        flex: 1,
        height: 40,
        fontSize: 16,
        fontFamily: Fonts.semiBold,
        color: '#fff',
        // paddingVertical: 10,
    }
})