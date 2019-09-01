import React, {Component} from 'react';
import {Button} from 'react-native-elements';

class Toggler extends Component {
  handleClick = () => {
    let random = Math.floor(Math.random() * 6);
    this.props.randomize(random);
  };

  render() {
    return <Button onPress={this.handleClick} title="Randomize" />;
  }
}

export default Toggler;
