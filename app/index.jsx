// import { Text, View } from "react-native";

// export default function Index() {
//   return (
//     <View
//       style={{
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//       <Text>Edit app/index.tsx to edit this screen.</Text>
//     </View>
//   );
// }


import { StyleSheet, ScrollView, Text, View, Image } from 'react-native'
import React from 'react'
import {SafeAreaView} from "react-native-safe-area-context";
import { images} from "../constants";
import Fonts from '../constants/fonts';
import Btn from '../components/Btn';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

// import { ScrollView } from 'react-native-gesture-handler';


const index = () => {
  return (
    <SafeAreaView style={styles.main}>
      <ScrollView>
        <View style={styles.view}>
          <Image source={images.logo} style={styles.logo} resizeMode='contain'/>

          <Image source={images.cards} style={styles.cards} resizeMode='contain'/>

          <View style={styles.view2}>
            <Text style={styles.text}>Discover Endless Possibilities with <Text style={styles.text2}>Aora</Text></Text>
            
            <Image source={images.path} style={styles.path} resizeMode='contain'/>
          </View>

          <Text style={styles.text3}>
            Where creativity meets innovation: embark on a journey of limitless exploration with Aora
          </Text>

          <Btn title="Continue with Email" handlesPress={() => router.push("/sign-in")} style={styles.btn}/>
        </View>
      </ScrollView>

      <StatusBar style="light"  backgroundColor='#161622' />
    </SafeAreaView>
  )
}

export default index

const styles = StyleSheet.create({
  main: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    backgroundColor: "#161622",
    paddingHorizontal: 10,
  },
  view: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
    width: "100%",
  },
  logo: {
    width: 130,
    height: 80,
    // alignSelf: "center",
    // marginTop: 100,
  },
  cards: {
    maxWidth: 380,
    width: "100%",
    height: 300,
  },
  view2: {
    position: "relative",
    marginTop: 5,
  }, 
  text: {
    fontFamily: Fonts.bold,
    fontSize: 30,
    color: "#fff",
    textAlign: "center",
  },
  text2: {
    color: '#FF8E01',
  },
  path: {
    width: 136,
    height: 15,
    position: "absolute",
    bottom: -2,
    right: -8,
  },
  text3: {
    fontFamily: Fonts.regular,
    fontSize: 14,
    color: "#fff",
    marginTop: 10,
    textAlign: "center",
  },
  btn: {
    width: "95%",
    marginTop: 20,
  }
})