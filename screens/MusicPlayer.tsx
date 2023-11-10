import React from 'react'
import { View, SafeAreaView, StyleSheet, TouchableOpacity, Dimensions, Image, Text } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';

const { width } = Dimensions.get('window')

const MusicPlayer = () => {
  return (
    <SafeAreaView style={style.container}>
      <View style={style.mainContainer}>
        {/* image */}
        <View style={style.imageWrapper}>
          <Image
            style={style.image}
            source={require('../assets/img/img1.jpg')}
          />
        </View>

        {/* Song content */}
        <View>
          <Text style={[style.songTitle , style.songContent]}> Arghavan </Text>
          <Text style={[style.songArtist , style.songContent]}> alireza ghorbany </Text>
        </View>

        {/* slider */}





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
  }
})