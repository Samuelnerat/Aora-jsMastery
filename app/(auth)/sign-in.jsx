import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import React, {useState} from 'react'
import { SafeAreaView } from "react-native-safe-area-context";
import {images} from "../../constants"
import InputField from '../../components/InputField';
import Btn from '../../components/Btn';
import { Link, router } from "expo-router";
import Fonts from '../../constants/fonts';

const SignIn = () => {
    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    const submit = () => {
        // console.log(form);
        router.replace('/home')
    }

  return (
    <SafeAreaView style={styles.main}>
        <ScrollView>
             <View style={styles.view}>
                <Image source={images.logo} resizeMode='contain' style={{width: 115, height: 35}}/>

                <Text style={styles.text}> Sign in</Text>

                <InputField title="Email" value={form.email} handleChangeText={(e) => setForm({...form, email:e})} otherStyles={styles.input} keyboardType="email-address" />

                <InputField title="Password" value={form.password} handleChangeText={(e) => setForm({...form, password:e})} otherStyles={styles.input} />

                <Text style={styles.text3}>Forgot Password?</Text>

                <Btn title="Log In" handlesPress={submit} style={styles.input} textStyle={styles.textStyle} />

                <View style={styles.view2}>
                    <Text style={styles.text2} >Don't have an account?</Text>
                    <Link style={styles.link} href="sign-up">Signup</Link>
                </View>
             </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn

const styles = StyleSheet.create({
    main: {
        // flex: 1,
        backgroundColor: '#161622',
        height: '100%',
        paddingVertical: 20,
        // paddingTop: 20,
    },
    view: {
        // flex: 1,
        width: '100%',
        minHeight: '85vh',
        justifyContent: 'center',
        paddingHorizontal: 20,
        paddingTop: 20,
        // alignItems: 'center',
    },
    text: {
        fontSize: 24,
        // fontWeight: 'semiBold',
        fontFamily: Fonts.semiBold,
        marginTop: 20,
        color: '#fff',
    },
    input: {
        marginTop: 20,
    },
    view2: {
        flexDirection: 'row',
        // alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 20,
        gap: 5,
    },
    text2: {
        fontSize: 16,
        color: '#fff',
        fontFamily: Fonts.regular,
    },
    text3: {
        fontSize: 16,
        color: '#CDCDE0',
        fontFamily: Fonts.regular,
        textAlign: 'right',
        paddingVertical: 10,
    },
    link: {
        fontSize: 16,
        fontFamily: Fonts.semiBold,
        color: '#FF9C01',
        // marginLeft: 5,
    },
})