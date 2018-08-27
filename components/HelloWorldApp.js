import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class HelloWorldApp extends Component {
  render() {
    return (
      <View>
        <Text style={hellowStyle.bigblue}>Hello world!</Text>
      </View>
    );
  }
}

const hellowStyle = StyleSheet.create({
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
});