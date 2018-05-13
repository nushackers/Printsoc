import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { NavigationActions } from 'react-navigation';

import AppContext from '../Util/AppContext.js';
import { getSunfireCredentials } from '../Util/Auth.js';
import { Images } from '../Themes';

// Styles
import styles from './Styles/LaunchScreenStyles';

class LaunchScreen extends Component {
  async componentWillMount() {
    await this.navigateIfNecessary();
  }

  async componentDidUpdate() {
    await this.navigateIfNecessary();
  }

  async navigateIfNecessary() {
    console.log('LS cWM props', this.props);

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

  render() {
    return (
      <View style={styles.mainContainer}>
        <Text>Open a file in Printsoc to print a file in SoC</Text>
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
