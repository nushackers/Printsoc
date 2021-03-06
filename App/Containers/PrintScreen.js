import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';
import AppContext from '../Util/AppContext.js';
import { executeCommand } from '../Util/Sunfire';
import RNFS from 'react-native-fs';

class PrintScreen extends Component {
  async handleSendFile() {
    const content = await RNFS.readFile(this.props.fileURL, 'base64');
    try {
      console.log(content.substring(0, 100));
      console.log(atob(content).substring(0, 100));
      const result = await executeCommand(
        `rm test.pdf; openssl enc -base64 -d -A > test.pdf <<EOL\n${content}\nEOL\n`
      );
      // TODO: Add command to convert to PS and the print
      window.alert(result);
      console.log(result);
    } catch (e) {
      console.log('Got error when sending file', e);
      const navigateAction = NavigationActions.navigate({ routeName: 'Login' });
      this.props.navigation.dispatch(navigateAction);
    }
  }
  render() {
    return (
      <View>
        <Text>Printing {this.props.fileURL}</Text>
        <Button title="Send File" onPress={() => this.handleSendFile()} />
      </View>
    );
  }
}

// Add AppContext
const ContextifiedPrintScreen = (props) => (
  <AppContext.Consumer>{(ctx) => <PrintScreen {...props} {...ctx} />}</AppContext.Consumer>
);

ContextifiedPrintScreen.navigationOptions = {
  title: 'Print'
};
export default ContextifiedPrintScreen;
