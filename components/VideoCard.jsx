import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import { icons } from '../constants';
import Fonts from '../constants/fonts';
import { ResizeMode, Video } from 'expo-av';

const VideoCard = ({posts: {video, title, otherStyles, username, thumbnail}}) => {
  return (
    <View style={[styles.main, otherStyles]}>
      <View style={styles.container}>
        <View style={styles.view}>
            
            <View style={styles.view2}>
                <Image source={icons.logoSmall} resizeMode='cover' style={styles.image}/>

                </View>
                
                <View style={styles.view3}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.name}>{username}</Text>
                    </View>
                    </View>
                    <View style={{paddingTop: 10}}>
                        <Image source={icons.menu} style={{width: '20px', height: '20px'}} resizeMode='contain'/>
                    </View>
                    </View>

                    {play ? (
                        <Video
                        source={{ uri: video }}
                        style={styles.video}
                        resizeMode={ResizeMode.CONTAIN}
                        isLooping
                        shouldPlay
                        isMuted={false}
                        useNativeControls
                        onPlaybackStatusUpdate={(status) =>{
                            if (status.didJustFinish) {
                                setPlay(false);
                            }
                        }}
                    />
                    ) : (
                        <TouchableOpacity onPress={handlePlay} style={styles.opacity} activeOpacity={0.7}>
                        <Image source={{ uri: thumbnail }} style={styles.img} resizeMode='cover' />
                        <Image source={icons.play} style={styles.play} resizeMode='contain'/>
                        </TouchableOpacity>
                    )}
    </View>
  )
}

export default VideoCard

const styles = StyleSheet.create({
    main: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: 14,
    },
    container : {
        flexDirection: 'row',
        gap: 10,
        alignItems: 'flex-start',
    },
    view: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        flex: 1,
    },
    view2 : {
        width: 40,
        height: 40,
        borderRadius: 20,
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
    },
    image: {
        borderRadius: 20,
        width: '100%',
        height: '100%',
    },
    view3: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        flex: 1,
        marginLeft: 10,
        gap: 5,
    },
    title: {
        color: '#fff',
        fontSize: 14,
        fontFamily: Fonts.semiBold,
    },
    name: {
        color: '#fff',
        fontSize: 14,
        fontFamily: Fonts.regular,
    },
    video: {
        width: '100%',
        height: 200,
        borderRadius: 20,
        marginTop: 10,
    },
    opacity: {
        position: 'relative',
        marginTop: 10,
        width: '100%',
        height: 200,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
    },
    img: {
        width: '100%',
        height: '100%',
        borderRadius: 20,
        marginTop: 10,
    },
    play: {
        position: 'absolute',
        width: 30,
        height: 30,
    }
})