import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import HelloWorldApp from './components/HelloWorldApp';
import Banana from './components/Banana';
import HelloCustom from './components/HelloCustom';
import Blinker from './components/Blinker';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <HelloWorldApp />
        <Banana />
        <HelloCustom />
        <Blinker />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
