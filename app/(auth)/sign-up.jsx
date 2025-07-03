import { StyleSheet, Text, View, ScrollView, Image,  } from 'react-native'
import React, {useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants'
import InputField from '../../components/InputField'
import Btn from '../../components/Btn'
import { router, Link } from 'expo-router'
import Fonts from '../../constants/fonts'

const SignUp = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
    })

    const submit = () => {
        console.log(form)
        router.replace('/home')
    }
  return (
    <SafeAreaView style={styles.main}>
        <ScrollView>
             <View style={styles.view}>
                <Image source={images.logo} resizeMode='contain' style={{width: 115, height: 35}}/>

                <Text style={styles.text}> Sign Up </Text>

                <InputField title="Username" value={form.username} handleChangeText={(e) => setForm({...form, username:e})} otherStyles={styles.input}  placeholder={"Your unique username"}/>

                <InputField title="Email" value={form.email} handleChangeText={(e) => setForm({...form, email:e})} otherStyles={styles.input} keyboardType="email-address" placeholder={"Your email"} />

                <InputField title="Password" value={form.password} handleChangeText={(e) => setForm({...form, password:e})} otherStyles={styles.input} />

                <Btn title="Sign Up" handlesPress={submit} style={styles.input}/>

                <View style={styles.view2}>
                    <Text style={styles.text2} >Already have an account?</Text>
                    <Link style={styles.link} href="sign-in">Login</Link>
                </View>
             </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default SignUp

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
        marginTop: 40,
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
    link: {
        fontSize: 16,
        fontFamily: Fonts.semiBold,
        color: '#FF9C01',
        // marginLeft: 5,
    }
})