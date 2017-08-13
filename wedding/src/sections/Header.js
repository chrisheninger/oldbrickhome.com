import React, { Component } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import hero from '../images/hero-unoptimized.jpg';
import Groom from '../icons/Groom';
import Bride from '../icons/Bride';
import Hearts from '../icons/Hearts';
import Taco from '../icons/Taco';
import Party from '../icons/Party';

class Header extends Component {
  render() {
    return (
      <View style={styles.root}>
        <View style={styles.container}>
          <View style={styles.hero}>
            <Image source={hero} style={styles.image}>
              <View style={styles.test} />
            </Image>
          </View>
          <View style={styles.emoji}>
            <View style={styles.icon}>
              <Groom width="100%" height="100%" />
            </View>
            <View style={styles.icon}>
              <Bride width="100%" height="100%" />
            </View>
            <View style={styles.icon}>
              <Hearts width="100%" height="100%" />
            </View>
            <View style={styles.icon}>
              <Party width="100%" height="100%" />
            </View>
          </View>
          <View style={styles.headline}>
            <Text style={[styles.text, styles.title]}>Chris & Hannah</Text>
            <Text style={[styles.text, styles.married]}>got married!</Text>
            <Text style={[styles.text, styles.party]}>You're invited to party and eat tacos!</Text>
            <View style={styles.icon}>
              <Taco width="100%" height="100%" />
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  container: {
    width: '100%',
    maxWidth: 1200,
    alignSelf: 'center',
  },
  hero: {
    width: '100%',
    height: '80vh',
  },
  image: {
    width: '100%',
    height: '100%',
    shadowColor: '#141E30',
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  test: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(20, 30, 48, 0.1)',
  },
  emoji: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    height: '20vh',
    maxWidth: 600,
    alignSelf: 'center',
  },
  icon: {
    flex: 1,
    width: '12vh',
    height: '12vh',
    padding: '1vh',
  },
  headline: {
    alignItems: 'center',
  },
  text: {
    color: '#141E30',
    textAlign: 'center',
  },
  title: {
    fontSize: 64,
    fontWeight: '700',
  },
  married: {
    fontSize: 64,
    fontWeight: '700',
    marginBottom: 48,
  },
  party: {
    fontSize: 48,
    marginBottom: 24,
  },
});

export default Header;
