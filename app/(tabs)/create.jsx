import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, Alert } from 'react-native'
import React, {useState} from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import InputField from '../../components/InputField';
import {Video, ResizeMode} from 'expo-av';
import { icons } from '../../constants';
import Btn from '../../components/Btn';
import { router } from 'expo-router';
import * as DocumentPicker from "expo-document-picker"
import Fonts from '../../constants/fonts';

const Create = () => {
    const [form, setForm] = useState({
        title: "",
        thumbnail: null,
        prompt: "",
        video: null
    });

  return (
    <SafeAreaView style={styles.main}>
      <ScrollView style={{paddingHorizontal: 20, marginVertical: 20}}>
        <Text style={{fontSize: 24, color: 'gray', fontFamily: Fonts.semiBold}}>Upload Video</Text>

        <InputField title="Video Title"  placeholder="Give your video catch title..." handleChangeText={(e) => createIconSetFromFontello({...formatDiagnostic, title:e})} otherStyles={{marginTop: 25, height:30,}}/>

        <View style={{marginTop: 65,}}>
            <Text style={{fontSize: 16, color: 'gray', fontFamily: Fonts.medium}}>Upload Video</Text>
            
            <TouchableOpacity onPress={() => Alert.alert("Choose a file")}>
                {form.video ? (
                    <Video source={form.video} resizeMode={ResizeMode.COVER} style={{width: 100, height: 64, borderRadius: 20}}/>
                ) : (
                    <View style={{width: '100%', height: 120, borderRadius: 20, backgroundColor: '#1E1E2D', alignItems: 'center', justifyContent: 'center'}}>
                        <View style={{width: 40, height: 40, borderRadius: 10, borderWidth: 1,borderColor: '#FF9001', alignItems: 'center', justifyContent: 'center'}}>
                            <Image source={icons.upload} style={{width: 20, height: 20}} resizeMode='contain'/>
                            {/* <Text>Choose a file</Text/> */}
                        </View>
                    </View>
                )}
            </TouchableOpacity>
                    </View>

        <View style={{marginTop: 20,}}>
            <Text style={{fontSize: 16, color: 'gray', fontFamily: Fonts.semiBold}}>Thumbnail Image</Text>
            
            <TouchableOpacity onPress={() => Alert.alert("Choose a file")}>
                {form.thumbnail ? (
                    <Image source={form.thumbnail} resizeMode='cover' style={{width: 100, height: 64, borderRadius: 20}}/>
                ) : (
                    <View style={styles.upload}>
                        <Image source={icons.upload} style={{width: 20, height: 20}} resizeMode='contain'/>
                        <Text style={styles.text}>Choose a file</Text>
                    </View>
                )}
            </TouchableOpacity>
                    </View>

                    <InputField title=" AI Prompt" placeholder="The AI prompt of your video..." value={form.prompt} handleChangeText={(e) => setForm({...form, prompt: e})} otherStyles={{marginTop: 20}}/>

                    <Btn title="Submit & Publish" handlesPress={() => Alert.alert("Video created successfully")} style={{marginTop: 20}}/>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Create

const styles = StyleSheet.create({
    main: {
        backgroundColor: '#161622',
        height: '100%',
        paddingVertical: 20,
    },
    upload: {
        width: "100%",
        height: 50,
        paddingHorizontal: 20,
        marginTop: 8,
        backgroundColor: '#1E1E2D',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    text: {
        fontSize: 14,
        color: 'gray',
        // marginLeft: 5,
        fontFamily: Fonts.medium,
    // marginTop: 5
    paddingLeft: 5,
    }
})