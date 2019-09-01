import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

import {Common} from '../../../styles';

const styles = StyleSheet.create({
  grid: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
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

class BoxCollection extends Component {
  render() {
    let users = {
      1: 'Abhijith',
      2: 'Fairooz',
      3: 'Lijin',
    };
    const {order} = this.props;
    return (
      <View style={styles.grid}>
        <View style={styles.bright}>
          <Text style={styles.text}>{users[order % 10]}</Text>
        </View>
        <View style={styles.sky}>
          <Text style={styles.text}>
            {users[parseInt(order / 10, 10) % 10]}
          </Text>
        </View>
        <View style={styles.light}>
          <Text style={styles.text}>
            {users[parseInt(order / 100, 10) % 10]}
          </Text>
        </View>
      </View>
    );
  }
}

export default BoxCollection;
