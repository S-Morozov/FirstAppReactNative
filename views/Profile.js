import React, {useContext} from 'react';
import {Button, Platform, SafeAreaView, StyleSheet, Text} from 'react-native';
import {MainContext} from '../contexts/MainContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Profile = (props) => {
  const {setIsLoggedIn} = useContext(MainContext);
  const logOut = async () => {
    console.log('profile, logout');

    try {
      setIsLoggedIn(false);
      await AsyncStorage.clear();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text>Profile view</Text>
      <Button title="Log out!" onPress={logOut} />
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
});

export default Profile;
