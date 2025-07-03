import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native'
import React, {useState, useEffect} from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images, icons } from '../../constants';
import { router } from 'expo-router';
import InfoBox from '../../components/InfoBox';
import Empty from '../../components/Empty';

const Profile = () => {
    const [posts, setPosts] = useState([]);
  return (
    <SafeAreaView style={styles.main}>
      <FlatList 
      data={posts} 
              keyExtractor={(item) => item.id}
        renderItem={({item}) => (
          <VideoCard posts={item}/>
        )}
        ListHeaderComponent={() => (
          <View style={styles.view}>
            <TouchableOpacity onPress={() => router.push("/app/(tabs)/create")} style={styles.opacity}>  
                <Image source={icons.logout} style={{width: 25, height: 25}} resizeMode='contain'/>
                  </TouchableOpacity>
                <View style={styles.view2}>
                    <Image source={images.profile} resizeMode='cover' style={{width: 50, height: 50, borderRadius: 10, borderWidth: 1, borderColor: '#FF9C01'}}/>
                </View>

                <InfoBox 
                title='John Doe'  containerStyles={{marginTop: 20, paddingTop: 20,}} titleStyles={{fontSize: 23, paddingTop: 10}} subtitleStyles={{fontSize: 16, paddingTop: 10}}/>


            <View style={{flexDirection: 'row', marginTop: 20, justifyContent: 'space-between', alignItems: 'center', gap: 10}}>
                <InfoBox 
                title='0' subtitle="Posts" containerStyles={{marginRight: 10}} titleStyles={{fontSize: 20}}/>

                <InfoBox 
                title='1.2k' subtitle="Followers" titleStyles={{fontSize: 20}}/>
            </View>
          </View>
        )}
        ListEmptyComponent={() => (
            <Empty title = "No videos found" subtitle="No videos found for this profile"/>
        )}
      />
    </SafeAreaView>
  )
}

export default Profile

const styles = StyleSheet.create({

    main:  {
        backgroundColor: '#161622',
        height: '100%',
        paddingVertical: 20,
    },
    view: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
        paddingHorizontal: 20,
    },
    opacity: {
        width: '100%',
        alignItems: 'flex-end',
        marginBottom: 10,
    },
    view2: {
        width: 40,
        height: 40,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    }
})