import React from 'react'
import { View, SafeAreaView, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';

const { width, height } = Dimensions.get('window')

const MusicPlayer = () => {
  return (
    <SafeAreaView style={style.container}>
      <View style={style.mainContainer}>
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
})