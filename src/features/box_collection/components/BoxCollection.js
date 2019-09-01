import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

import {Common} from '../../../styles';

const styles = StyleSheet.create({
  light: {
    backgroundColor: 'powderblue',
    ...Common.box,
  },
  sky: {
    backgroundColor: 'skyblue',
    ...Common.box,
  },
  bright: {
    backgroundColor: 'steelblue',
    ...Common.box,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

const BoxCollection = () => {
  return (
    <React.Fragment>
      <View style={styles.bright}>
        <Text style={styles.text}>Abhijith</Text>
      </View>
      <View style={styles.sky}>
        <Text style={styles.text}>Lijin</Text>
      </View>
      <View style={styles.light}>
        <Text style={styles.text}>Fairooz</Text>
      </View>
    </React.Fragment>
  );
};

export default BoxCollection;
