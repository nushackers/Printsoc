import React, { Component } from 'react';
import { Text, View } from 'react-native';
import AppContext from '../Util/AppContext.js';

class PrintScreen extends Component {
  render() {
    return <Text>Printing {this.props.fileURL}</Text>;
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
