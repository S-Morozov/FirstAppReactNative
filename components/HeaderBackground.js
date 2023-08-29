import React from 'react';
import {ImageBackground, View, StyleSheet, Text} from 'react-native';

const image = {uri: 'https://legacy.reactjs.org/logo-og.png'};

const HeaderBackground = () => (
  <View style={styles.container}>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <Text style={styles.text}>Inside</Text>
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  
  },

  image: {
    top: 50,
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },
});

export default HeaderBackground;
