import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const HomeScreen = () => {
  return (
    <View style={styles.main}>
      <Text>Hello World</Text>
    </View>
  );
};

export default HomeScreen;
