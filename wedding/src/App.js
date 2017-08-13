import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import Header from './sections/Header';
import Details from './sections/Details';
import RSVP from './sections/RSVP';
import Registry from './sections/Registry';
import Questions from './sections/Questions';

class App extends Component {
  render() {
    return (
      <View style={styles.root}>
        <Header />
        <Details />
        <RSVP />
        <Registry />
        <Questions />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundImage: 'linear-gradient(to bottom, #ece9e6, #ffffff);',
    padding: 12,
  },
});

export default App;
