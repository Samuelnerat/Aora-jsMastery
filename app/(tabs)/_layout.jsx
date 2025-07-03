import { StyleSheet, Text, View, Image } from 'react-native'
import {Tabs} from "expo-router";
import Fonts from '../../constants/fonts';
import { icons } from '../../constants';
import React from 'react'

const TabsIcons = ({icon, name, color}) => {
  return (
    <View style={{alignItems: 'center', justifyContent: 'center', gap: 2, paddingVertical: 10,}}>
        <Image source={icon} resizeMode='contain' tintColor={color} style={{width: 23, height: 30}}/>
      <Text style={{color: color, fontSize: 10}}>{name}</Text>
    </View>
  )
}

const TabsLayout = () => {
  return (
    <Tabs screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#FFA001',
        tabBarInactiveTintColor: '#CDCDE0',
        tabBarStyle: {
            backgroundColor: '#161622',
            borderTopWidth: 2,
            borderTopColor: '#232533',
            height: 65,
            paddingTop: 5,
        }
    }}>
        <Tabs.Screen name='home' options={{
            title: 'Home', headerShown: false, tabBarIcon: ({color}) => (
                <TabsIcons icon={icons.home} name='Home' color={color}/>
            ),
        }} />
        <Tabs.Screen name='create' options={{
            title: 'Create', headerShown: false, tabBarIcon: ({color}) => (
                <TabsIcons icon={icons.plus} name='Create' color={color}/>
            ),
        }} />


        <Tabs.Screen name='profile' options={{
            title: 'Profile', headerShown: false, tabBarIcon: ({color}) => (
                <TabsIcons icon={icons.profile} name='Profile' color={color}/>
            ),
        }}/>

                <Tabs.Screen name='bookmark' options={{
            title: 'Bookmark', headerShown: false, tabBarIcon: ({color}) => (
                <TabsIcons icon={icons.bookmark} name='Saved' color={color}/>
            ),
        }} />
    </Tabs>
  )
}
export default TabsLayout

const styles = StyleSheet.create({})