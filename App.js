/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {
  Platform, 
  StyleSheet, 
  Text, 
  View
} from 'react-native';
import { 
  createBottomTabNavigator,
  createAppContainer 
} from 'react-navigation';

const instructions = Platform.select({
  ios: 'iOS',
  android:
    'Android'
});

type Props = {};
export class Gallery extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Hi Professor Kurfess</Text>
        <Text style={styles.instructions}>this is the boilerplate tester for ...</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    );
  }
}

export class Settings extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Hi Professor Kurfess</Text>
        <Text style={styles.instructions}>this is the boilerplate tester for ...</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    );
  }
}

export class Paint extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Hi Professor Kurfess</Text>
        <Text style={styles.instructions}>this is the boilerplate tester for ...</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    );
  }
}

export default createAppContainer(createBottomTabNavigator({
  Paint:Paint,
  Gallery:Gallery,
  Settings:Settings
}));

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
