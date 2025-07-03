import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image, ImageBackground } from 'react-native'
import React, {useState} from 'react'
import { icons } from '../constants';
import Fonts from '../constants/fonts';
import * as Animatable from "react-native-animatable"
import { Video, ResizeMode } from 'expo-av';

const zoomIn = {
    // 0: {
    //     opacity: 0,
    //     scale: 0.5
    // },
    // 0.5: {
    //     opacity: 0.5,
    //     scale: 0.75
    // },
    // 1: {
    //     opacity: 1,
    //     scale: 1
    // }

      0: {
    scale: 0.9,
  },
  1: {
    scale: 1.1,
  }
}

const zoomOut = {
    // 0: {
    //     opacity: 1,
    //     scale: 1
    // },
    // 0.5: {
    //     opacity: 0.5,
    //     scale: 0.75
    // },
    // 1: {
    //     opacity: 0,
    //     scale: 0.5
    // }

      0: {
    scale: 1.1,
  },
  1: {
    scale: 0.9,
  }
}

const TrendingItem = () => {
    const [play, setPlay] = useState(false);
    const handlePlay = () => {
        setPlay(true);
    }
  return (
<Animatable.View style={styles.main} animation={zoomIn} iterationCount={1} duration={1000}>
    {play ? (
        <Video
        source={icons.video}
        style={styles.video}
        resizeMode={ResizeMode.CONTAIN}
        onPlaybackStatusUpdate={(status) => {
            if (status.didJustFinish) {
                setPlay(false);
            }
        }}
        isLooping
        isMuted
        shouldPlay
        useNativeControls
      />
    ) : (
        <TouchableOpacity onPress={handlePlay} style={styles.opacity} activeOpacity={0.7}>
            <ImageBackground style={styles.bg} resizeMode='cover' source={icons.home} />
            <Image style={styles.img} source={icons.play} resizeMode='contain' width={20} height={20}/>
        </TouchableOpacity>
    )}

</Animatable.View>
  )
}

const Trending = () => {
    return (
        <FlatList data="" renderItem={({item}) => <TrendingItem />} horizontal showsHorizontalScrollIndicator={false} contentOffset={{x:170}}/>
  )
}


export default Trending

const styles = StyleSheet.create({
    main: {
        marginRight: 10,
    },
    video: {
        width: 300,
        height: 300,
        borderRadius: 10,
        marginTop: 10,
        backgroundColor: 'white',
        opacity: 0.5,
    },
    opacity: {
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
    },
    bg: {
        width: 300,
        height: 300,
        borderRadius: 10,
        backgroundColor: 'black',
        opacity: 0.5,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10,
        overflow: 'hidden',
    }, 
    img: {
        position: 'absolute',
    }
})