import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import HomeScreen from './src/screens/main/HomeScreen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <HomeScreen />
      </View>
    );
  }
}

export default App;
