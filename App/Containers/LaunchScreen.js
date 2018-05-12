import React, { Component } from 'react';
import { ScrollView, Text, Image, View } from 'react-native';

import { Images } from '../Themes';

// Styles
import styles from './Styles/LaunchScreenStyles';

export default class LaunchScreen extends Component {
  static navigationOptions = {
    title: 'It a good launch'
  };

  render() {
    return (
      <View style={styles.mainContainer}>
        <Text>Open a file in this app</Text>
      </View>
    );
  }
}
