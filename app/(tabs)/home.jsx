import { StyleSheet, Text, View, FlatList, Image, RefreshControl } from 'react-native'
import React, {useState, useEffect} from 'react'
import { SafeAreaView } from "react-native-safe-area-context";
import Fonts from '../../constants/fonts';
import { images } from '../../constants';
import Search from '../../components/Search';
import Trending from '../../components/Trending';
import VideoCard from '../../components/VideoCard';
import Empty from '../../components/Empty';

const Home = () => {
    const [posts, setPosts] = useState([]);
    const [refreshing, setRefreshing] = useState(false);

  return (
    <SafeAreaView style={styles.main}> 
        <FlatList
        data={posts}
        keyExtractor={(item) => item?.$id ?? Math.random().toString()}
        renderItem={({ item }) => <VideoCard posts={item} />}
                ListHeaderComponent={() => (
        <View style={styles.view}>
            <View style={styles.view2}>
                <View>
                    <Text style={styles.text}>Welcome Back,</Text>
                    <Text style={styles.text2}>John Doe</Text>
                </View>
                <View style={{marginTop: 10,}}>
                    <Image source={images.logoSmall} resizeMode='contain' style={{width: 40, height: 40}} />
                </View>
                </View>

                <Search />

                <View style={styles.view3}>
                    <Text style={styles.text3}>Latest Videos</Text>
                    <Trending />
                </View> 
  </View>
  )}
  ListEmptyComponent={() => (
    <Empty title="No videos found" subtitle=" Be the first to upload a video" />

  )}
  refreshControl={
    <RefreshControl
      refreshing={refreshing}
      onRefresh={() => {
        setRefreshing(true);
        setTimeout(() => {
          setRefreshing(false);
        }, 2000);
      }}/>}
/>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#161622',
        height: '100%',
        paddingVertical:20,
    },
    view: {
        marginHorizontal: 20,
        paddingVertical: 20,
    },
    view2: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignContent: 'flex-start',
        marginBottom: 20,
    },
    text: {
        color: '#CDCDE0',
        fontSize: 15,
        fontFamily: Fonts.medium,
    },
    text2: {
        color: '#fff',
        fontSize: 24,
        fontFamily: Fonts.semiBold,
    },
    view3: {
        width: '100%',
        flex: 1,
        paddingVertical: 20,
    },
    text3: {
        color: '#fff',
        fontSize: 18,
        fontFamily: Fonts.regular,
        marginBottom: 10,
    }
})

// import { StyleSheet, Text, View, FlatList, Image } from 'react-native'
// import React, {useState, useEffect} from 'react'
// import { SafeAreaView } from "react-native-safe-area-context";
// import Fonts from '../../constants/fonts';
// import { images } from '../../constants';
// import Search from '../../components/Search';
// import Trending from '../../components/Trending';
// import VideoCard from '../../components/VideoCard';
// import Empty from '../../components/Empty';

// const Home = () => {
//       const [posts, setPosts] = useState([]);
//       const [refreshing, setRefreshing] = useState(false);

//     return (
//       <SafeAreaView> 
//           <FlatList
//             data={posts}
//             keyExtractor={(item) => item?.$id ?? Math.random().toString()}
//             renderItem={({ item }) => <VideoCard posts={item} />}
//             ListEmptyComponent={() => (
//               <View>
//                   <View>
//                       <View>
//                           <Text>Welcome Back,</Text>
//                           <Text>John Doe</Text>
//                       </View>
//                       <View>
//                           <Image source={images.logoSmall} resizeMode='contain' width={9} height={10}/>
//                       </View>
//                   </View>

//                   <Search />

//                   <View>
//                       <Text>Latest Videos</Text>
//                       <Trending />
//                   </View> 
//               </View>
//             )}
//             refreshControl={
//               <RefreshControl
//                 refreshing={refreshing}
//                 onRefresh={() => {
//                   setRefreshing(true);
//                   setTimeout(() => {
//                     setRefreshing(false);
//                   }, 2000);
//                 }}
//               />
//             }
//           />
//       </SafeAreaView>
//     )
// }

// export default Home

// const styles = StyleSheet.create({})