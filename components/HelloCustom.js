import React, { Component } from 'react';
import {Text, View} from 'react-native';

class Greeting extends Component {
  render() {
    return (
      <Text>Hello {this.props.name}!</Text>
    );
  }
}

export default class HelloCustom extends Component {
  render() {
    return (
      <View>
        <Greeting name='Ngkei laju'/>
        <Greeting name='Pio' />
      </View>
    );
  }
}