import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import RaisedHandah from '../icons/RaisedHandah';

class Questions extends Component {
  render() {
    return (
      <View style={styles.root}>
        <RaisedHandah width={256} height={256} />
        <Text>Questions?</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {},
});

export default Questions;
