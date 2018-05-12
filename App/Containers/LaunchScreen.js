import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { NavigationActions } from 'react-navigation';

import AppContext from '../Util/AppContext.js';
import { Images } from '../Themes';

// Styles
import styles from './Styles/LaunchScreenStyles';

class LaunchScreen extends Component {
  componentWillMount() {
    this.navigateIfNecessary();
  }

  componentDidUpdate() {
    this.navigateIfNecessary();
  }

  navigateIfNecessary() {
    console.log('LS cWM props', this.props);
    // TODO: Redirect to login screen if user is not logged in
    // const navigateAction = NavigationActions.navigate({ routeName: 'Login' });
    // this.props.navigation.dispatch(navigateAction);

    // TODO: Redirect to PrintScreen if props.fileURL present
    if (this.props.fileURL) {
      const navigateAction = NavigationActions.navigate({ routeName: 'Print' });
      this.props.navigation.dispatch(navigateAction);
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
