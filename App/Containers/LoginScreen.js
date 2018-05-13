import React, { Component } from 'react';
import { Text, TextInput, View, Button } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { setSunfireCredentials } from '../Util/Auth';
import { verifyCredentials } from '../Util/Sunfire';

import styles from './Styles/LoginScreenStyles';

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      verifying: false,
      credentialsValid: false
    };
  }

  handleLogin = async () => {
    const { username, password } = this.state;
    this.setState({ verifying: true });
    const isValid = await verifyCredentials(username, password);
    this.setState({ verifying: false, credentialsValid: isValid });

    if (isValid) {
      await setSunfireCredentials(username, password);

      // Navigate to main screen
      const navigateAction = NavigationActions.navigate({ routeName: 'Launch' });
      this.props.navigation.dispatch(navigateAction);
    } else {
      // TODO: Craft a more useful error message
      window.alert('Wrong credentials/cannot connect to Sunfire');
    }
  };

  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.container}>
          <Text style={styles.titleText}>Printsoc</Text>
          <Text style={styles.formLabel}>Sunfire ID</Text>
          <TextInput
            style={styles.textInput}
            autoFocus={true}
            autoCorrect={false}
            autoCapitalize="none"
            returnKeyType="next"
            placeholder="e0123456"
            placeholderTextColor="#888"
            underlineColorAndroid="#888"
            disabled={this.state.verifying}
            value={this.state.username}
            onChangeText={(username) => this.setState({ username })}
          />
          <Text style={styles.formLabel}>Password</Text>
          <TextInput
            style={styles.textInput}
            secureTextEntry={true}
            returnKeyType="go"
            placeholder="Password"
            placeholderTextColor="#888"
            underlineColorAndroid="#888"
            disabled={this.state.verifying}
            value={this.state.password}
            onSubmitEditing={this.handleLogin}
            onChangeText={(password) => this.setState({ password })}
          />
          <Button
            title="Login"
            onPress={this.handleLogin}
            disabled={
              this.state.verifying ||
              this.state.username.length === 0 ||
              this.state.password.length === 0
            }
          />
        </View>
      </View>
    );
  }
}
