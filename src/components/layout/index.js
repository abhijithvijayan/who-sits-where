import React from 'react';
import {View, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

const index = ({children}) => {
  return <View style={styles.wrapper}>{children}</View>;
};

export default index;
