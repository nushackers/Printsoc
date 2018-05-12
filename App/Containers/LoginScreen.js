import React, { Component } from 'react';
import { Text, TextInput, View } from 'react-native';
import RoundedButton from '../Components/RoundedButton';

import styles from './Styles/LoginScreenStyles';

export default class LoginScreen extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.container}>
          <Text style={styles.titleText}>Printsoc</Text>
          <Text style={styles.formLabel}>NUSNET ID</Text>
          <TextInput style={styles.textInput} autoFocus={true} maxLength={8} placeholder={'e0123456'} placeholderTextColor={'#888'} underlineColorAndroid={'#888'} />
          <Text style={styles.formLabel}>Password</Text>
          <TextInput style={styles.textInput} secureTextEntry={true} placeholder={'Password'} placeholderTextColor={'#888'} underlineColorAndroid={'#888'} />
          <RoundedButton text={'Login'} onPress={() => window.alert('Mwahahaha I have your password now!')} />
        </View>

      </View>
    )
  }
}
