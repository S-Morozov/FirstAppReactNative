import React from 'react';
import PropTypes from 'prop-types';
import {Platform, SafeAreaView, StyleSheet, Text, Image} from 'react-native';
import {mediaUrl} from '../utils/appConfig';

const Single = ({route, navigation}) => {
  console.log('route params', route.params);
  const singleMedia = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={{uri: mediaUrl + singleMedia.thumbnails.w160}}
        style={styles.image}
      />
      <Text>{singleMedia.title}</Text>
      <Text>{singleMedia.description}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 30 : 0,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
    height: 300,
    width: 300,
  },
});

Single.propTypes = {
  navigation: PropTypes.object,
  route: PropTypes.object,
};

export default Single;
