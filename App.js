import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import VideoPlayer from "react-native-video-player";

const App = () => {
  return (
    <View style={style.container}>
      <View style={style.header}>
        <Ionicons name="arrow-back-outline" size={22} color="white" />
        <Image source={require('./assets/zimo.png')} />

        <Ionicons name="heart-outline" size={22} color="white" />
      </View>

      <View style={style.videocontainer} >
<VideoPlayer
video={require("./assets/vid.mp4")}
thumbnail={require("./assets/thumbnail.png")}
showDuration={true}
autoplay
controlsTimeout={3000}
pauseOnPress={true}
endThumbnail={require("./assets/thumbnail.png")}
/>


      </View>
      
    </View>
  );
};

export default App;

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  header: {
    top: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  videocontainer:{
    height: 200,
    width:"100%",
    backgroundColor:"black",
    // marginTop:50,
    top:200,
    
  }
});
