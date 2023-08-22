import {SafeAreaView, StyleSheet} from 'react-native';
import {StatusBar} from 'expo-status-bar';
import List from './components/List';
import ListItem from './components/ListItem';

const App = () => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <List />
        <ListItem />
      </SafeAreaView>
      <StatusBar style="auto" />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
