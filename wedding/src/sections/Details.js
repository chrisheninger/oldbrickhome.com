import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Details extends Component {
  render() {
    return (
      <View style={styles.root}>
        <View style={styles.hr} />
        <Text style={[styles.text]}>2017.11.04</Text>
        <Text style={[styles.text]}>5pm - 8pm</Text>
        <Text style={[styles.text]}>1606 E. Culver St. Phoenix, AZ 85006</Text>
        <Text style={[styles.text]}>Environment and attire is casual. Enjoy yourselves!</Text>
        <View style={styles.hr} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
  },
  hr: {
    width: '90%',
    height: 1,
    backgroundColor: '#141E30',
    marginVertical: 16,
  },
  text: {
    color: '#141E30',
    textAlign: 'center',
    fontSize: 32,
  },
  date: {},
});

export default Details;
