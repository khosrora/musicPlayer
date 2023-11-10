import React, { useRef, useState, useEffect } from 'react'
import { Animated, View, SafeAreaView, StyleSheet, TouchableOpacity, Dimensions, Image, Text, FlatList } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Slider from '@react-native-community/slider';

import songs from '../model/data';

const { width } = Dimensions.get('window')

const MusicPlayer = () => {

  const [songsIndex, setSongsIndex] = useState(0)
  const scrollX = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    scrollX.addListener(({ value }) => {
      const index = Math.round(value / width);
      setSongsIndex(index)
    })
  }, [])

  const RenderSongs = ({ item, index }: any) => {
    return (
      <Animated.View style={style.imageWrapperMain}>
        <View style={style.imageWrapper}>
          <Image
            style={style.image}
            source={item.artwork}
          />
        </View>
      </Animated.View>
    )
  }

  return (
    <SafeAreaView style={style.container}>
      <View style={style.mainContainer}>

        <Animated.FlatList
          data={songs}
          renderItem={RenderSongs}
          keyExtractor={(item: any) => item.id}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={16}
          onScroll={Animated.event([{
            nativeEvent: {
              contentOffset: {
                x: scrollX
              }
            }
          }], { useNativeDriver: true })}
        />

        {/* Song content */}
        <View>
          <Text style={[style.songTitle, style.songContent]}> {songs[songsIndex].title} </Text>
          <Text style={[style.songArtist, style.songContent]}> {songs[songsIndex].artist} </Text>
        </View>

        {/* slider */}
        <View>
          <Slider
            style={style.progresBar}
            value={10}
            minimumValue={0}
            maximumValue={100}
            thumbTintColor='#FFD369'
            minimumTrackTintColor="#FFD369"
            maximumTrackTintColor="#fff"
            onSlidingComplete={() => { }}
          />

          {/* progress durations */}
          <View style={style.progressLevelDuration}>
            <Text style={style.progressTime}>00:00</Text>
            <Text style={style.progressTime}>00:00</Text>
          </View>


          {/* Music Controlls Containr */}
          <View style={style.musicControllsContainer}>

            <TouchableOpacity onPress={() => { }}>
              <Ionicons size={24} color="#FFD369" name="play-skip-back-outline" />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { }}>
              <Ionicons size={48} color="#FFD369" name="pause-circle" />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => { }}>
              <Ionicons size={24} color="#FFD369" name="play-skip-forward-outline" />
            </TouchableOpacity>

          </View>
        </View>




      </View>
      <View style={style.bottomContainer}>
        <View style={style.bottomIconWrapper}>
          <TouchableOpacity onPress={() => { }}>
            <Ionicons size={24} color="#888888" name="heart-outline" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { }}>
            <Ionicons size={24} color="#888888" name="repeat" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { }}>
            <Ionicons size={24} color="#888888" name="share-outline" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { }}>
            <Ionicons size={24} color="#888888" name="ellipsis-horizontal" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default MusicPlayer

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#222831",
  },
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bottomContainer: {
    width: width,
    alignItems: 'center',
    paddingVertical: 14,
    borderTopColor: "#393E46",
    borderWidth: 1
  },
  bottomIconWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%"
  },
  imageWrapper: {
    width: 300,
    height: 340,
    marginBottom: 25
  },
  imageWrapperMain: {
    width: width,
    justifyContent: 'center',
    alignItems: "center"
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 15
  },
  songContent: {
    color: "#EEEEEE",

  },
  songArtist: {
    textAlign: 'center',
    fontWeight: '300'
  },
  songTitle: {
    textAlign: 'center',
    marginBottom: 4,
    fontSize: 18
  },
  progresBar: {
    width: 350,
    height: 40,
    marginTop: 25,
    flexDirection: 'row'
  },
  progressLevelDuration: {
    width: 340,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  progressTime: {
    color: '#fff',
    fontWeight: '500'
  },
  musicControllsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
    marginBottom: 25
  }
})