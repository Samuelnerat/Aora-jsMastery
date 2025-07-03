import { StyleSheet, Text, View, FlatList, Image, RefreshControl, Alert } from 'react-native'
import React, {useState} from 'react'
import { images } from '../../constants'
import { SafeAreaView } from 'react-native-safe-area-context'
import VideoCard from '../../components/VideoCard'
import Search from '../../components/Search'
import Empty from '../../components/Empty'
import Fonts from '../../constants/fonts'


const Bookmark = () => {
  const [posts, setPosts] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  return (
    <SafeAreaView style={styles.view}>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => (
          <VideoCard posts={item} otherStyles={{marginTop: 20}}/>
          // <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 10}}>
          //   <Image source={item.image} style={{width: 50, height: 50, borderRadius: 10, marginRight: 10}} resizeMode='cover'/>
          //   <Text>{item.title}</Text>
          // </View>
        )}
        ListHeaderComponent={() => (
          <View style={styles.main}>
            <View style={styles.container}>
              <View>
                <Text style={styles.text}>Saved Video</Text>
              </View>
            </View>

            <Search />
          </View>
          // <View style={{paddingHorizontal: 20, marginTop: 10}}>
          //   <Image source={images.logo} style={{width: 100, height: 100, borderRadius: 10}} resizeMode='cover'/>
          // </View>
        )}

        ListEmptyComponent={() => (
          <Empty title = "No videos found" subtitle="Be the first one to upload a video"/>
          // <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
          //   <Image source={images.empty} style={{width: 200, height: 200}} resizeMode='contain'/>
          //   <Text style={{color: '#fff', fontSize: 18, fontWeight: 'bold'}}>No videos found</Text>
          // </View>
        )}
        refreshControl={<RefreshControl refreshing={refreshing}     onRefresh={() => {
        setRefreshing(true);
        setTimeout(() => {
          setRefreshing(false);
        }, 2000);
      }}/>}
      />
    </SafeAreaView>
  )
}

export default Bookmark

const styles = StyleSheet.create({
  view: {
    backgroundColor: '#161622',
    height: '100%',
    paddingVertical: 20,
  },
  main: {
    marginHorizontal: 20,
    paddingVertical: 20,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  text:{
    color: '#fff',
    fontSize: 18,
    fontFamily: Fonts.semiBold,
  }
})