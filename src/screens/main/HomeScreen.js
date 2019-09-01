import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  light: {
    width: 75,
    height: 75,
    backgroundColor: 'powderblue',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sky: {
    width: 75,
    height: 75,
    backgroundColor: 'skyblue',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bright: {
    width: 75,
    height: 75,
    backgroundColor: 'steelblue',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

const HomeScreen = () => {
  return (
    <View style={styles.main}>
      <View style={styles.bright}>
        <Text style={styles.text}>Abhijith</Text>
      </View>
      <View style={styles.sky}>
        <Text style={styles.text}>Lijin</Text>
      </View>
      <View style={styles.light}>
        <Text style={styles.text}>Fairooz</Text>
      </View>
    </View>
  );
};

export default HomeScreen;
