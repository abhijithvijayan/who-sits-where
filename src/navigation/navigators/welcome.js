import React, {Component} from 'react';
import {View} from 'react-native';
import {BoxCollection, Toggler} from '../../features/box_collection/components';

class welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {order: 123};
  }

  randomize = pos => {
    let combinations = {
      0: 123,
      1: 132,
      2: 213,
      3: 231,
      4: 312,
      5: 321,
    };
    this.setState({order: combinations[pos]});
  };

  render() {
    return (
      <View>
        <BoxCollection order={this.state.order} />
        <Toggler randomize={this.randomize} />
      </View>
    );
  }
}

export default welcome;
