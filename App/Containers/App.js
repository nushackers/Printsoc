import '../Config';
import DebugConfig from '../Config/DebugConfig';
import React, { Component } from 'react';
import RootContainer from './RootContainer';
import AppContext from '../Util/AppContext.js';

/**
 * Provides an entry point into our application.  Both index.ios.js and index.android.js
 * call this component first.
 *
 * We bring in our RootContainer.
 *
 * We separate like this to play nice with React Native's hot reloading.
 */
class App extends Component {
  render() {
    console.log('Propo', this.props, this.props.fileURL);
    const context = { fileURL: this.props.fileURL };
    return (
      <AppContext.Provider value={context}>
        <RootContainer />
      </AppContext.Provider>
    );
  }
}

// allow reactotron overlay for fast design in dev mode
export default (DebugConfig.useReactotron ? console.tron.overlay(App) : App);
