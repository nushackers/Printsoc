import React, { Component } from 'react';
import { Text, TextInput, View, Button } from 'react-native';
import SSH from 'react-native-ssh';

import styles from './Styles/LoginScreenStyles';

export default class LoginScreen extends Component {
  async handleLogin() {
    let config = { user: this.state.username, password: this.state.password, host: 'sunfire.comp.nus.edu.sg' };
    try {
      console.log(await SSH.execute(config, 'ls ~'));
      window.alert("Login success");
    } catch(e) {
      window.alert(e);
    }
  }
  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.container}>
          <Text style={styles.titleText}>Printsoc</Text>
          <Text style={styles.formLabel}>Sunfire ID</Text>
          <TextInput
            style={styles.textInput}
            autoFocus={true}
            placeholder="e0123456"
            placeholderTextColor="#888"
            underlineColorAndroid="#888"
            onChangeText={(username) => this.setState({ username })}
          />
          <Text style={styles.formLabel}>Password</Text>
          <TextInput
            style={styles.textInput}
            secureTextEntry={true}
            placeholder="Password"
            placeholderTextColor="#888"
            underlineColorAndroid="#888"
            onChangeText={(password) => this.setState({ password })}
          />
          <Button
            title="Login"
            onPress={() => this.handleLogin()}
          />
        </View>
      </View>
    );
  }
}
