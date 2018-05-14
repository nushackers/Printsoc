import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { NavigationActions } from 'react-navigation';

import AppContext from '../Util/AppContext.js';
import { getSunfireCredentials } from '../Util/Auth.js';
import { executeCommand } from '../Util/Sunfire';
import { Images } from '../Themes';

// Styles
import styles from './Styles/LaunchScreenStyles';

class LaunchScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { statistics: 'Loading...' };
  }
  async componentWillMount() {
    await this.navigateIfNecessary();
    this.setState({ statistics: await this.getStatistics() });
  }

  async componentDidUpdate() {
    await this.navigateIfNecessary();
  }

  async navigateIfNecessary() {
    console.log('LS nIN props', this.props);

    // Redirect to login screen if user is not logged in
    const creds = await getSunfireCredentials();
    if (!creds) {
      const navigateAction = NavigationActions.navigate({ routeName: 'Login' });
      this.props.navigation.dispatch(navigateAction);
      return;
    }

    // Redirect to PrintScreen if props.fileURL present
    if (this.props.fileURL) {
      const navigateAction = NavigationActions.navigate({ routeName: 'Print' });
      this.props.navigation.dispatch(navigateAction);
      return;
    }
  }

  async getStatistics() {
    try {
      // Create ssh key if it does not exist already
      await executeCommand('(cat /dev/zero | ssh-keygen -q -N "" -t rsa -f ~/.ssh/printsoc_id_rsa) && cat ~/.ssh/printsoc_id_rsa.pub >> ~/.ssh/authorized_keys');
      const result = await executeCommand(`ssh -tto StrictHostKeyChecking=no -i ~/.ssh/printsoc_id_rsa localhost /usr/local/bin/pusage`);
      console.log(result);
      return result.join('\n');
    } catch(e) {
      window.alert('There is an error connecting to sunfire');
      const navigateAction = NavigationActions.navigate({ routeName: 'Login' });
      this.props.navigation.dispatch(navigateAction);
    }
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <Text>Open a file in Printsoc to print a file in SoC</Text>
        <Text>Printing statistics:</Text>
        <Text>{this.state.statistics}</Text>
      </View>
    );
  }
}

// Add AppContext
const ContextifiedLaunchScreen = (props) => (
  <AppContext.Consumer>{(ctx) => <LaunchScreen {...props} {...ctx} />}</AppContext.Consumer>
);

ContextifiedLaunchScreen.navigationOptions = {
  title: 'Printsoc'
};
export default ContextifiedLaunchScreen;
